import React, { useState } from "react";
import "./style/style.css";
import Form from "./Components/Form";
import ChatList from "./Components/ChatList";

function App() {
  const [inputText, setInputText] = useState();
  const [messages, setMessages] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat App</h1>
      </header>
    

      <Form
        setInputText={setInputText}
        inputText={inputText}
        messages={messages}
        setMessages={setMessages}
      />
       <ChatList messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
