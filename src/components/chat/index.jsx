import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'
import Header from "@/components/customHeader"
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm"
import Ai from '../customMessageForms/ai'

const Chat = () => {
   
    const chatProps = useMultiChatLogic(
        "813b3d49-6767-43ea-b822-5c8366bda3b1",
        "testuser",
        "1234"
    )
   

  return (
    <div style={{flexBasis:'100%'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow
         {...chatProps}
         style={{height:"100vh",width:"100%"}}
         onIsTyping={() => console.log("user is typing")}
         renderChatHeader={(chat)=><Header chat={chat}/>}
        //  renderChatSettings={(chatAppState) => {}}
        //  renderChatList={(chatAppState) => null}
         renderMessageForm={(props)=>{
          if(chatProps.chat?.title.startsWith('AiChat_')){
            return <Ai props={props} activeChat={chatProps.chat}/>
          }
            return (
                <StandardMessageForm props={props} activeChat={chatProps.chat}/>
             )
         }}
        

        />
        
    </div>
  )
}

export default Chat
