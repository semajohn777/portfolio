import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai"
import "./Exp.css"
const Exp = () => {
  return (
    <section id='exp'>
      <h5>My skills</h5>
      <h2>My Experience</h2>
      <div className="experience__container">
      <div className="container experience__frontend">
        <h3>Frontened Development</h3>
        <div className="experience__content">
          <article className='experince__details'>
            <AiFillCheckCircle className="details__icons"/>
            <div>

            <h4>HTML</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experince__details'>
            <AiFillCheckCircle className="details__icons"/>
            <div>
            <h4>css</h4>
            <small className='text-light'>Experience</small>

            </div>
          </article>

          <article className='experince__details'>
            <AiFillCheckCircle className="details__icons"/>
            <div>

            <h4>Boostrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experince__details'>
            <AiFillCheckCircle className="details__icons"/>
            <div>
            <h4>Java script</h4>
            <small className='text-light'>Intermediate</small>
            </div>
              
          </article>

          <article className='experince__details'>
            <AiFillCheckCircle className="details__icons"/>
            <div>

            <h4>React</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
        </div>
      </div>
      <div className="container experience__backend"><h3>Backend Development</h3>
      <div className="experience__content">
          <article className='experince__details'>
            <AiFillCheckCircle className="details__icons"/>
            <div>

            <h4>Express</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            
            <article className='experince__details'>
            <AiFillCheckCircle className="details__icons"/>
            <div>

            <h4>Node.js</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experince__details'>
            <AiFillCheckCircle className="details__icons"/>
            <div>

            <h4>MongoDb</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>

          
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default Exp