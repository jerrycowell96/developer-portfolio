import React from 'react';
import "./Testimonials.css";
import { Data } from './Data';
//Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules 
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
    <h2 className="section__title">Testimonials</h2>
    <span className="section__subtitle">What my coworkers say about Me</span> 

    <Swiper className="test__container"
    loop={true}
    grabCursor={true}
    spaceBetween={24}
    pagination={{
        clickable: true,
    }}
    breakpoints={{
        576: {
            slidesPerView: 2,
            
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        }
    }}
    modules={[Pagination]}>
    {Data.map(({id, image, title, description}) => {
        return(
            <SwiperSlide className="test__card" key={id}>
                <img src={image} alt="" 
                className="test__img" />

                <h3 className="test__name">{title}</h3>
                <p className="test__description">{description}</p>
            </SwiperSlide>

        )
    })}
       </Swiper> 
    </section>
  );
}

export default Testimonials
