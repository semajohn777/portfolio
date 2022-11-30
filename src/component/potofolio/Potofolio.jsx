import React from 'react'
import "./potofolio.css"
import data from '../../data/data';
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import  { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Potofolio = () => {


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