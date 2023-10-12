import React from "react";
import './chat.css'
import ChatBox from "../components/chat-box";
// import {ChakraProvider} from "@chakra-ui/react"

export function Chat() {
  return (
    <>
        <h1 className="Text">Chat</h1>
        <ChatBox />      
    </>
  );
}