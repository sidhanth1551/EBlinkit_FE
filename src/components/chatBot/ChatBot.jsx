import React from 'react';
import { MultiChatWindow } from 'react-chat-engine-advanced';
import Chat from '../chat/index';
const ChatBot = () => {
  return (
    <div
    style={{
      height: "600px",
      width: "400px",
      backgroundColor: "white",
      overflow: "auto",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    }}
  >

        <div style={{ width: "200%", overflow: "hidden" }}> {/* Viewport */}
          <div style={{ transform: "translateX(-25%)" }}>
            <Chat/>
          </div>
        </div>
    </div>
  );
};

export default ChatBot;
