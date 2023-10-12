import React, {useState, useEffect} from "react";
import './chat-box.css'

export default function ChatBox() {
    const url = "http://127.0.0.1:8000/messages";

    const [data, setData] = useState([]);

    const fetchMessages = async () => {
        return await fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data.data));
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div>
            <ul>
                {data.map((message) => (
                    <li key={message.sender}>
                        {message.message}
                    </li>
                ))}
            </ul>
        </div>
    )
}



