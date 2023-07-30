import "./Residencies.css";
import React from "react";
import { useSwiper } from 'swiper/react'
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Slider Data
import { sliderSettings } from "../../utils/SliderResponsive";

import data from "../../utils/slider"
const Residencies = () => {
  return (
    <div>
      <div className="residencies" id="residency">
        <div className="container">
          <div className="row r-wrapper">
            <div className="r-head d-flex text-center text-sm-start flex-column justify-content-center justify-content-sm-start align-content-center align-content-sm-start">
              <span className="title mb-4">Best Choices</span>
              <span className="subtitle mb-5">Popular Residencies</span>
              <span className="swipe mb-5">Swipe right to see more....▶️:) </span>
            </div>


            <Swiper {...sliderSettings}>
            {/* <SliderButtons/> */}
              {data.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="r-card">
                    <img src={card.image} className="mb-4" alt="card-image" />
                    <span className="r-price mb-3">
                      <span className="me-1 dollar">$</span>
                      <span className="price ">{card.price}</span>
                    </span>
                    <span className="cardname mb-3">{card.name}</span>
                    <span className="carddetail">{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residencies;


const SliderButtons=()=>{
  const swiper =useSwiper();
   return (
     <div>
       {/* Button for swipe card */}
       <div className="r-buttons">
               <button onClick={()=> swiper.slidePrev()}>&lt;</button>
               <button onClick={()=> swiper.slideNext()}>&gt;</button>
             </div>
     </div>
   )
}