import React from 'react'
import "./about.css"
import me from "../images/278577547_513000503775586_5745867558882857679_n.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscLibrary} from "react-icons/vsc"



const About = () => {
  return (
    <section id='about'>
        <h5>
          Get to Know
        </h5>
          <h2>About Me</h2>
          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
              <img src={me} alt="" />
              </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                  <article className="about_card">
                        <FaAward className='about__icons'/>
                    <h5>Experience</h5>
                    <small>1+ Years Working</small>
                  </article>

                  <article className="about_card">
                        <FiUsers className='about__icons'/>
                    <h5>Clients</h5>
                    <small>3 plus</small>
                  </article>

                  <article className="about_card">
                        <VscLibrary className='about__icons'/>
                    <h5>project</h5>
                    <small>10+ completed works</small>
                  </article>
                </div>
                <p>Hi, My name is John Agbudumhe</p>
                <p>I am a web developer</p>
                <a href="#contact" className='btn btn-primary'>Let's talk</a>
            </div>
          </div>

    </section>
  )
}

export default About