import React,{useState} from "react";
import { styles } from "../../styles";

const Avatar = (props) => {
 

  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px" }}>
      <div style={{...styles.avatarHello,...{opacity:hovered?"1":"0"}}}>
      Hey iam Blinky
      </div>
      <div 
      className="transition-3"
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      onClick={()=>props.onClick && props.onClick()}
      style={{ ...styles.chatWithMeButton,...{border:hovered?"1px solid #f9f0ff":"4px solid green"} }}></div>
    </div>
  );
};

export default Avatar;
