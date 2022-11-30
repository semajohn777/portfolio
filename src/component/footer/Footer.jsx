import React from 'react'
import "./footer.css"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'><strong>Sema John</strong> </a>
      <ul className="permalinks">
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#exp">Experience</a> </li>
        {/* <li><a href="#service">Services</a> </li> */}
        <li><a href="#portfolio">Portfolio</a> </li>
        <li><a href="#">Testimonial</a> </li>
        <li><a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://m.me/john.agbudumhe"><BsFacebook/></a>
        <a href="https://m.me/john.agbudumhe"><BsInstagram/></a>
        <a href="https://m.me/john.agbudumhe"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; John Portfolio. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer