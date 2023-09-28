import React from "react";
import './text-box.css';

function UsernameBox() {
    return (
        <>
            <label className="inputLabel">
                Enter Username: <input type="text" name="username" />
            </label>
        </>
  );
}

export default UsernameBox;