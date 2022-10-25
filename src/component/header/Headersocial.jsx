import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {FaDribbble} from "react-icons/fa"
const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="http//linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http//github.com" target="_blank"><BsGithub/></a>
        <a href="http//dribble.com" target="_blank"><FaDribbble/></a>
    </div>
  )
}

export default Headersocial