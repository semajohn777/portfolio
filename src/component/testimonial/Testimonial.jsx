import React from 'react'
import "./test.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import img1 from "../images/1594541575814.png"
// import img from "../images/1594541575814.png"



const Testimonial = () => {

  
  return (
    <section>
      <h5>Review from client</h5>
      <h2>TEstiomonial</h2>

      <div className="container testimonial__container">
        {/* <article className="testimonial"> */}
          {/* <div className="client__avatar">
            <img src={img1} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article>

        <article className="testimonial">
        <div className="client__avatar">
            <img src={img1} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article>

        <article className="testimonial">
        <div className="client__avatar">
            <img src={img1} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article>

        <article className="testimonial">
        <div className="client__avatar">
            <img src={img1} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article>

        <article className="testimonial">
        <div className="client__avatar">
            <img src={img1} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article>

        <article className="testimonial">
        <div className="client__avatar">
            <img src={img1} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article>

        <article className="testimonial">
        <div className="client__avatar">
            <img src={img1} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article> */}

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
        <article className="testimonial">
        <div className="client__avatar">
            <img src={img} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article>
        </SwiperSlide>
    <SwiperSlide>
    <article className="testimonial">
        <div className="client__avatar">
            <img src={img} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article>
    </SwiperSlide>
    <SwiperSlide>
    <article className="testimonial">
        <div className="client__avatar">
            <img src={img} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article>
    </SwiperSlide>
    <SwiperSlide>
    <article className="testimonial">
        <div className="client__avatar">
            <img src={img} alt="" />
          </div>
            <h5 className='client__name'>Nmae of client</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </article>
    </SwiperSlide>
    </Swiper> */}
      </div>
    </section>
  )
}

export default Testimonial