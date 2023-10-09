import React from "react";
import './text-box.css';


function UsernameBox() {
    function submitButton() {
        alert("Submitted");
    }

    return (
        <div className="inputContainer">
            <label className="inputBox">
                <input className="userInput"type="text" name="username" placeholder= "Enter Username"/>
                <button className="submitButton" onClick={submitButton}>Submit</button>
            </label>
        </div>
  );
}

export default UsernameBox;