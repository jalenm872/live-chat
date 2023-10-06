import React from "react";
import './text-box.css';

function UsernameBox() {
    return (
        <>
            <div className="inputContainer">
                <label className="inputBox">
                    <input type="text" name="username" defaultValue= "Enter Username" />
                    <button type="submit" className="submitButton">Submit</button>
                </label>
            </div>
        </>
  );
}

export default UsernameBox;