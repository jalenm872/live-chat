import React from "react";
import ChatBox from "../components/chat-box";

export function Chat() {
  return (
    <>
      <div class="flex justify-center">
        <ChatBox className="messages"/>
      </div>
    </>
  );
}