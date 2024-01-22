import { usePostAiTextMutation } from '@/state/api'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MessageFormUI from './MessageFormUI'

const Ai = ({props,activeChat}) => {
  
  const navigate = useNavigate();

  const [message, setMessage] = useState("")
  const [attachment, setAttachment] = useState("")
  const [trigger] = usePostAiTextMutation()

  const handleSubmit = async()=>{
        const date = new Date().toISOString().replace("T"," ").replace("Z",`${Math.floor(Math.random()*1000)}+00:00`);
        const at = attachment?[{blob:attachment,file:attachment.file}]:[]
        const form={
            attachments:at,
            created:date,
            sender_username:props.username,
            text:message,
            activeChatId:activeChat.id
        }

        props.onSubmit(form)
        const response = await trigger(form)
        console.log(response);
        const apiListToRender = [`http://localhost:1337/api/getProductsByCategory/${response.data.searchedFor}`,`http://localhost:1337/api/getProductsByProductName/${response.data.searchedFor}`,`http://localhost:1337/api/getProductsByBrand/${response.data.searchedFor}`]
        let url = response.data.isCategory?apiListToRender[0]:response.data.isProduct?apiListToRender[1]:response.data.isBrand?apiListToRender[2]:null
       
        if(url)
        navigate('/apvc',{state:url})

        setMessage("")
        setAttachment("")
  }
  return (
     <MessageFormUI
     setAttachment={setAttachment}
     message={message}
     handleSubmit={handleSubmit}
     handleChange={setMessage}
     />
  )
}

export default Ai
