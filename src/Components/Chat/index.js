import React, { useEffect } from "react";
import { Widget, addResponseMessage, toggleMsgLoader } from "react-chat-widget";
import axios from "axios";
import "react-chat-widget/lib/styles.css";

function Chat() {
  useEffect(() => {
    addResponseMessage("Welcome to G-Eggs how may I help you?");
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    toggleMsgLoader();

    const requestBody = {
      message: newMessage,
    };

    axios
      .post("https://g-eggs-server.tech/chat", requestBody)
      .then((response) => {
        toggleMsgLoader();
        addResponseMessage(response.data);
      });
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Welcome to G-Eggs"
        subtitle="G-Egg Chat Assistant"
        profileAvatar={"images/icon.png"}
      />
    </div>
  );
}

export default Chat;
