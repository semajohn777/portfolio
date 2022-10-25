import React from 'react'
import "./nav.css"
import {FaHome} from "react-icons/fa"
import{AiOutlineUser} from "react-icons/ai"
import{BiBookReader} from "react-icons/bi"
import{RiServiceLine} from "react-icons/ri"
import{BiMessageRoundedDetail} from "react-icons/bi"
import { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>{setActive("#")}} className={active === "#" ? "active" : ""}><FaHome/></a>
      <a href="#about" onClick={()=>{setActive("#about")}} className={active === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#contact" onClick={()=>{setActive("#contact")}} className={active === "#contact" ? "active" : ""}><BiMessageRoundedDetail/></a>
      <a href="#exp" onClick={()=>{setActive("#exp")}} className={active === "#exp" ? "active" : ""}><BiBookReader/></a>
      <a href="#services" onClick={()=>{setActive("#services")}} className={active === "#services" ? "active" : ""}><RiServiceLine/></a>
      {/* <a href="#potofolio"><FaHome/></a> */}
    </nav>
  )
}

export default Navbar