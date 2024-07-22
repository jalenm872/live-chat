import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { UsernameInput } from "./username-form";
import { Input } from "@material-tailwind/react";

function UsernameBox() {
    const navigate = useNavigate();

    useEffect(() => {
        const track = document.getElementById('userInput');
        // have access to it
        console.log(track)
    }, []);

    function submitButton() {
        if (document.getElementById('userInput').value === "") {
            alert("Please enter a username");
            return;
        }
        else if (document.getElementById('userInput').value.length > 10) {
            alert("Username must be less than 15 characters");
            
            return;
        }
        else if (document.getElementById('userInput').value.length < 10 && document.getElementById('userInput').value !== "") {
            navigate("/chat", {state: {username: document.getElementById('userInput').value}});
        }


    }

    return (
        <div class="flex justify-center">
            <div>
                <Input className="userInput" placeholder="Username" class="hover:bg-zinc-400 text-white pl-1 mr-1 h-10 rounded"/>
            </div>
            <div>
                <button 
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={submitButton}>
                        Start Chatting
                </button>
            </div>
            
        </div> 
  );
}

export default UsernameBox;