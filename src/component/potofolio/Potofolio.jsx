import React from 'react'
import "./potofolio.css"
import img1 from "../images/portfolio two two.jpg"
import img2 from "../images/port church.jpg"
import img3 from "../images/one.jpg"
import img4 from "../images/portfolio three.jpg"
import img5 from "../images/portfolio four.jpg"
import img6 from "../images/portfolio five.jpg"
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import  { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Potofolio = () => {

   const data = [
  {
    id: 1,
    img: img1,
    title: "Full Stack MERN app with authorisation an authentication",
    github: "https://github.com/semajohn777/client",
    demo: "https://commenting-app.netlify.app/",
  },
  {
    id: 2,
    img: img2,
    title: "Church Website with Html, css and Boostrap",
    github: "https://github.com/semajohn777",
    demo: "https://breath-123.netlify.app/",
  },
  {
    id: 3,
    img: img3,
    title: "Simple dynamic Website",
    github: "https://github.com/semajohn777",
    demo: "https://semaproject.netlify.app",
  },

  {
    id: 4,
    img: img4,
    title: "Full Stack MERN app with authorisation an authentication",
    github: "https://github.com/semajohn777",
    demo: "https://breath-123.netlify.app/",
  },

  {
    id: 5,
    img: img5,
    title: "simple website",
    github: "https://github.com/semajohn777/slack",
    demo: "https://taupe-faun-08135b.netlify.app/",
  },

  {
    id: 6,
    img: img6,
    title: "Full Responsible web design",
    github: "https://github.com/semajohn777/boostrap",
    demo: "https://admirable-cascaron-adf684.netlify.app/",
  },
]
  return (

    
    <section id='services'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* <div className="container portfolio__containe"> */}
        <Swiper
            modules={[Navigation, Pagination,  A11y]}
      spaceBetween={60}
      // slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      className="portfolio__container"
       breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          1024: {
            width: 1024,
            slidesPerView: 3,
         },
          
          
        }}
        >
        {data.map((item)=>(
          <SwiperSlide key={item.id} className='portfolio_item'>
          <div className="portfolio__item-image">
            <img src={item.img} alt="" />
          </div>
          <h3 className='h3'>{item.title}</h3>
          <div className="portfolio__item-cta">
          <a className='btn' href={item.github} rel="noreferrer" target="_blank">Github</a>
          <a className='btn btn-primary' href={item.demo} rel="noreferrer" target="_blank">Live Demo</a>
          </div>
        </SwiperSlide>
        ))}
        </Swiper>
   
      {/* </div>  */}

      {/* <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}

        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          1024: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>

        </SwiperSlide>
      </Swiper> */}
    </section>
  )
}

export default Potofolio