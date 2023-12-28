import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@material-tailwind/react";

export default function ChatBox() {
    const url = "http://127.0.0.1:8000/api/messages";

    const [data, setData] = useState([]);

    const {state} = useLocation();
    const { username } = state; // Read values passed on state for username

    useEffect(() => {
        let interval = setInterval(() => {
            fetchMessages();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

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

        if (document.querySelector(".messageInput").value === "") {
            alert("Please enter a message");
            return;
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                message: document.querySelector('.messageInput').value,
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


    return (
        <div class="flex-col justify-center">
            <div class="outline mb-5 ml-100">
                {listMessages}
            </div>
            <div class="flex content-center">
                <label>
                    <Input className="messageInput" class="outline py-2 px-4 rounded" pr="4.5rem" type="text" placeholder="Enter Message" aria-label="Enter Message" />
                </label>
                <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}



