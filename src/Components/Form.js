import React from "react";

export default function Form({
  inputText,
  setInputText,
  messages,
  setMessages,
}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitChatHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, { text: inputTextHandler }]);
    setInputText("");
  };
  return (
    <form>
      <input
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        placeholder="Message"
        className="chat-input"
      />
      <button className="chat-button" onClick={submitChatHandler} type="submit">
        Send
      </button>
    </form>
  );
}
