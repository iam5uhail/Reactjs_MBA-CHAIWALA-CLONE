import React, { useEffect } from 'react'
import logo from "../images/logo.png"
import {BsMouse} from "react-icons/bs"

const Misc = () => {
    const dotCursor=(e)=>{
        const cursor=document.querySelector(".cursor") 
        cursor.style.top=`${e.pageY-14}px`
        cursor.style.left=`${e.pageX-14}px`

    const element=e.target;

    if(element.getAttribute("data-cursorpointer")){
        cursor.classList.add("cursorHover")
    }else if(element.getAttribute("data-cursorpointermini")){
        cursor.classList.add("cursorHoverMini")
    }else{
        cursor.classList.remove("cursorHover")
        cursor.classList.remove("cursorHoverMini")
    }

    }
    useEffect(()=>{
    window.addEventListener("mousemove",dotCursor)
    return()=>{
    window.removeEventListener("mousemove",dotCursor)
    }
    })
  return (
    <>
    <div className='cursor'></div>
    <a href="/" className="logo">
        <img src={logo} alt="logo"data-cursorpointer={true}/>
    </a>
    <a href="/franchise" className="franchiseBtn" data-cursorpointer={true}>
        GET A FRANCHISE
    </a>
    <BsMouse className="scrollBtn" data-cursorpointer={true}/> 
    </>
  )
}

export default Misc