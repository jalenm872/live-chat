import React from "react";
import ChatBox from "../components/chat-box";

export function Chat() {
  return (
    <>
      <h1 className="Text">Chat</h1>
      <div className="chatOutline">
        <ChatBox className="messages"/>
      </div>
    </>
  );
}