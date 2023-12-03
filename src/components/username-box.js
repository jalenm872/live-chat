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
        <div className="inputContainer">
            <label className="inputBox">
                <input className="userInput"type="text" name="username" placeholder= "Enter Username"/>
                <button 
                    className="submitButton" 
                    onClick={submitButton}>
                        Start Chatting
                </button>
            </label>
        </div>
  );
}

export default UsernameBox;