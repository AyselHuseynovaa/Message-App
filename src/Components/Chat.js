import React from "react";
export default function Chat({text}) {
  return (
    <div>
      <li className="chat-item">{text}</li>
    </div>
  );
}
