import React, { useEffect, useState } from "react";
import { Widget, addResponseMessage, toggleMsgLoader } from "react-chat-widget";
import axios from "axios";
import oauth from "axios-oauth-client";
import "react-chat-widget/lib/styles.css";

function Chat() {
  useEffect(() => {
    addResponseMessage(
      "Welcome to G-Eggs how may I help you? Please ask your questions"
    );
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    toggleMsgLoader();

    const requestBody = {
      message: newMessage,
    };

    axios
      .post(
        "http://geggsbackend-env.eba-hy8hkdzm.us-east-1.elasticbeanstalk.com/chat",
        requestBody
      )
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
