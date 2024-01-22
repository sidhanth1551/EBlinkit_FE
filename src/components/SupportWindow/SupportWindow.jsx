import React, { useState } from 'react'
import { styles } from '../../styles';
import Chat from "../chat/index"
const SupportWindow = (props) => {
    const [user, setUser] = useState(null)
    const [chat, setChat] = useState(null)

  return (
 
    <>{props.visible && 
    <div
    style={{...styles.supportWindow,
    }}
  >
    <div style={{ width: "200%",overflow: "hidden" }}> {/* Viewport */}
          <div style={{ transform: "translateX(-25%)",padding:"0px"}}>
            <Chat/>
          </div>
        </div>
        </div>
}
        </>
  )
}

export default SupportWindow
