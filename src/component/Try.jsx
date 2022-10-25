import img1 from "./images/portfolio two two.jpg"
import img2 from "./images/port church.jpg"
import img3 from "./images/one.jpg"
import img4 from "./images/portfolio three.jpg"
import img5 from "./images/portfolio four.jpg"
import img6 from "./images/portfolio five.jpg"


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Try = () => {
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
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {/* <SwiperSlide >
     
     <article style={{width: "50%"}}>
      <img src={img1} alt="" style={{width: "50%"}}/>
     </article>
      </SwiperSlide>
      <SwiperSlide>
        <article style={{width: "50%"}}>
          <img src={img2} alt="" style={{width: "50%"}}/>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article style={{width: "50%"}}>
          <img src={img3} alt="" style={{width: "50%"}}/>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article style={{width: "50%"}}>
          <img src={img4} alt="" style={{width: "50%"}}/>
        </article>
      </SwiperSlide> */}
      ...

       {data.map((item) => (
          <SwiperSlide key={item._id}>
              <article style={{width: "50%"}}>
             <div>
              <img style={{width: "50%"}} src={item.img} alt="" />
               <h2>{ item.title }</h2>
              </div>
          
        </article>
          </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Try