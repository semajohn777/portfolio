import React from 'react'
import "./services.css"
import {AiOutlineCheck} from "react-icons/ai"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services__container">
      <div className="services__div">
      <article className="services">
        <div className='service__head'>
        <h3>UL/UX Design</h3>

        </div>
        <ul className='service__list'>
          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>
        </ul>
      </article>
        
      </div>

        <div className="services__div">

      <article className="services">
        <div className='service__head'>
        <h3>Web Development</h3>

        </div>
        <ul className='service__list'>
          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>
        </ul>
      </article>
        </div>

        <div className="services__div">

      <article className="services">
        <div className='service__head'>
        <h3>Content creation</h3>

        </div>
        <ul className='service__list'>
          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>

          <li><AiOutlineCheck className='services__icons'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>
        </ul>
      </article>
        </div>

      </div>
      

      </section>
  )
}

export default Services