import React, { useEffect, useState } from "react";
import { Widget, addResponseMessage, toggleMsgLoader } from "react-chat-widget";
import axios from "axios";
import oauth from "axios-oauth-client";
import "react-chat-widget/lib/styles.css";

function Chat() {
  const [token, setToken] = useState("");
  useEffect(() => {
    addResponseMessage(
      "Welcome to G-Eggs how may I help you? Please ask your questions"
    );

    if (!token) {
      console.log("hello");
      getAccessToken();
    }
  }, []);

  const getAccessToken = async () => {
    const getAuthorizationCode = oauth.client(axios.create(), {
      url: "https://accounts.google.com/o/oauth2/auth",
      grant_type: "authorization_code",
      client_id:
        "417490624961-6mb2h9cbivnvo731fb5m0j624uaj8l0f.apps.googleusercontent.com",
      client_secret: "EOoAGuBb9AYawpzONhWjbYbn",
      username: "enriksabalvaro7@gmail.com",
      password: "enrik123",
      scope: "*",
    });

    const auth = await getAuthorizationCode();

    console.log(auth, "auth");
  };

  const handleNewUserMessage = async (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    toggleMsgLoader();

    const requestBody = {
      query_input: {
        text: {
          text: newMessage,
          language_code: "en-US",
        },
      },
    };

    const Authorization = {
      headers: {
        Authorization:
          "Bearer ya29.a0AfH6SMCNu78A-RPZuT9eQBVlArZ4nqTJDzRGksi-pGvsQ2UWsgfkHbRQj1ccW8AkUsd4eBxIkX-XlFHYTgW4rSlQyb8D-I07KI-N3rkFhDxc2A_a3ilMk1HxWDQqika7vHcM8yVYJ_pn04KXeONowtUrFcFoLoMUWtX9ZVKBim2m2RvoUqicjFMu-zwwJPfqJ2-y8Lr9Q0HYJsKH3wo24z6W6AeALsBASF-G8FFJ4BB9Duccdpie",
      },
    };
    axios
      .post(
        `https://dialogflow.clients6.google.com/v2beta1/projects/g-egg-ybef/locations/global/agent/sessions/b3bbd5c1-71f8-5635-0270-70d5fe0afba3:detectIntent`,
        requestBody,
        Authorization
      )
      .then((response) => {
        setTimeout(() => {
          toggleMsgLoader();
          addResponseMessage(response.data.queryResult.fulfillmentText);
        }, 500);
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
