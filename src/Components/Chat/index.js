import React, { useEffect } from "react";
import {
  Widget,
  addResponseMessage,
  toggleMsgLoader,
  toggleWidget,
} from "react-chat-widget";
import axios from "axios";
import "react-chat-widget/lib/styles.css";
import "../../styles.css";

function Chat() {
  useEffect(() => {
    addResponseMessage(
      "Hello! I'm a G-Eggs Chat Assistant! I can answer questions like price, location etc. How can I help you?"
    );
    setTimeout(() => {
      toggleWidget();
    }, 8000);
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    toggleMsgLoader();

    const requestBody = {
      message: newMessage,
    };

    axios
      .post(`${process.env.SERVER_API}/chat`, requestBody)
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
