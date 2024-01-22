import React,{useState,useRef,useEffect} from "react";
import Avatar from "../Avatar/Avatar";
import SupportWindow from "../SupportWindow/SupportWindow";
const SupportEngine = () => {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false)


  useEffect(()=>{
    
    function handleClickOutside(event){
        console.log('evenet',event)
        console.log(ref)
      if(ref.current && !ref.current.contains(event.target)){
        setVisible(false)
      }
    }
    document.addEventListener("mousedown",handleClickOutside)

    return ()=>{
      document.removeEventListener("mousedown",handleClickOutside)
    }

  },[ref])

  return (

    <div ref={ref}>
      <SupportWindow visible={visible}/>
      <Avatar onClick={()=>{setVisible(true);console.log('true')}}/>
    </div>
  );
};

export default SupportEngine;
