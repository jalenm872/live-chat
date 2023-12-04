import React from "react";
import { useNavigate } from "react-router-dom";

function UsernameBox() {
    const navigate = useNavigate();

    function submitButton() {
        if (document.querySelector(".userInput").value === "") {
            alert("Please enter a username");
            return;
        }
        else if (document.querySelector(".userInput").value.length > 10) {
            alert("Username must be less than 15 characters");
            
            return;
        }
        else if (document.querySelector(".userInput").value.length < 10 && document.querySelector(".userInput").value !== "") {
            navigate("/chat", {state: {username: document.querySelector(".userInput").value}});
        }


    }

    return (
        <div class="flex justify-center pt-16">
            <label>
                <input class="outline" placeholder= "Enter Username"/>
                <button 
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={submitButton}>
                        Start Chatting
                </button>
            </label>
        </div>
  );
}

export default UsernameBox;