import React, {useState, useEffect} from "react";
import './chat-box.css'
import { useLocation } from "react-router-dom";

export default function ChatBox() {
    const url = "http://127.0.0.1:8000/messages";

    const [data, setData] = useState([]);

    const {state} = useLocation();
    const { username } = state; // Read values passed on state

    const fetchMessages = async () => {
        return await fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data.data));
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    function addMessage(){


        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sender: username,
                message: document.getElementById('messageInput').value,
            }),
        })

        .finally(() => {
            fetchMessages();
        })
    }

    return (
        <div>
            <div className="messageContainer">
                {data.map((message) => (
                    <p key={message.id}>
                        <strong>{message.sender}</strong>:
                        {"   "}
                        {message.message}
                        <br />
                    </p>
                ))}
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



