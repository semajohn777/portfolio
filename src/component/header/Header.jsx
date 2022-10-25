import React from 'react'
import Cta from './Cta'
import me from "../images/WIN_20220325_13_50_10_Pro.jpg"
import Headersocial from './Headersocial'
import "./header.css"

const Header = () => {
  return (
    <header>
        <div className="container header__container"> 
        <div className='sect_one_grid'>
          <div>
              <h5>Hello i'm</h5>
              <h1>AGBUDUMHE JOHN</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <p className='text-light'>Call: +2347 035 295 095</p>
              <Cta/>
              <Headersocial/>
          </div>
          <div className="me">
              <img src={me} alt="" />
          </div>
        </div>
        {/* <a href="#footer" className='scroll__down'>Scroll Down</a> */}
        </div>

    </header>
  )
}

export default Header