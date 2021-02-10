import React from 'react'
import Chat from "./Chat";
 export default function ChatList({messages}){
     return(
         <div  className="container">
             <ul className="chat-list">
{messages.map((message)=>(
    <Chat  text={messages.text}/>
))}
             </ul>
         </div>
     )
 }