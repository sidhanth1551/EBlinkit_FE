import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useState } from 'react'
import Dropzone from 'react-dropzone'

const MessageFormUI = ({
    setAttachment,
    message,
    handleSubmit,
    handleChange
}) => {
    const [preview, setPreview] = useState("")
    return (
        <div className='message-form-container'>
        
          <div className='message-form'>
             <div className='message-form-input-container'> 
                  <input className='message-form-input'
                  type='text'
                  value={message}
                  onChange={(e)=>handleChange(e.target.value)}
                  placeholder={'Send a message'}
                  />
             </div>
             <div className='message-form-icons'>
                  
               
                  <hr className='vertical-line'></hr>
                  
                  <PaperAirplaneIcon
                  className='message-form-icon-airplane'
                  onClick={()=>{
                    setPreview("")
                    handleSubmit()
                  }}/>
             </div>
          </div>
        </div>
      )
}

export default MessageFormUI
