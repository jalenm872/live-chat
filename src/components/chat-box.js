import React, {useState, useEffect} from "react";
import './chat-box.css'
import { useLocation } from "react-router-dom";

export default function ChatBox() {
    const url = "http://127.0.0.1:8000/api/messages";

    const [data, setData] = useState([]);

    const {state} = useLocation();
    const { username } = state; // Read values passed on state for username

    //Function to fetch messages from Postgress DB via API Get request
    //Returning a list of objects
    function fetchMessages() {
        fetch(url)
            .then(response => {
                return response.text();
            })
            .then(response => 
                JSON.parse(response)
            )
            .then(data => {
                setData(data);
            });
    }

    //Function to add message to Postgress DB via API Post request
    function addMessage(){

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                message: document.getElementById('messageInput').value,
            }),
        })

        //Fetch messages again to update the chat box
        .finally(() => {
            fetchMessages();
        })
    }

    const listMessages = data.map(message => 
        <div className="message">
           {message.username}: {message.message}
        </div>
    );

    // useEffect(() => {
    //     fetchMessages();
    // }, []);

    useEffect(() => {
        let interval = setInterval(() => {
            fetchMessages();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    

    return (
        <div>
            <div className="messageContainer">
                {listMessages}
            </div>
            <div className="inputContainer">
                <label>
                    <input className="messageInput" id="messageInput" name="messageInput" pr="4.5rem" type="text" placeholder="Enter Message" aria-label="Enter Message" />
                </label>
                <input type="submit" value="Submit" onClick={addMessage} />
            </div>
        </div>
    )
}



