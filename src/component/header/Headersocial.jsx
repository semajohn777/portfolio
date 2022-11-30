import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {FaDribbble} from "react-icons/fa"
const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/agbudumhe-john-030b48254/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/semajohn777" target="_blank"><BsGithub/></a>
        <a href="http//dribble.com" target="_blank"><FaDribbble/></a>
    </div>
  )
}

export default Headersocial