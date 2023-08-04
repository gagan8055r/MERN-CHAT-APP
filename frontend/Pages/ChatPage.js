import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import {chats} from './../../../backend/data/data'
const ChatPage = () => {

const [chats,setChats]=useState([])

const fetchChats= async()=>{

    const {config}= await axios.get('/api/chat')
    // setChats(data); 
    console.log(config);
}

useEffect(()=>{
fetchChats()
},[])

  return (
    <div>
    {chats.map((chat)=>(<div>{chat.chatName}</div>))}   

    </div>
    // <div></div>

  )
}

export default ChatPage
