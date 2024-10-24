import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useSwiper } from 'swiper/react';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import React from 'react';


const Swipelements = ({images=[], swipenexter, handleInteraction }) => {
  // const swiper = useSwiper();
      const swiperRef = swipenexter; 

  const img4slides = images.map((image, index)=>(<SwiperSlide key={index}><img src={image} loading='lazy'></img></SwiperSlide>))
 
  return (
    <>
      <Swiper 
        pagination={true}
        // effect={'flip'}
        navigation={true}
        spaceBetween={30}
        speed={1000}
        onSwiper={(swiper) => (swipenexter.current = swiper)}

        centeredSlides={true}
        lazy={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]} 
        style={{
          // height:'50vh',
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}

        onSlideChange={() => {
          if (swiperRef.current) {
            // swiperRef.current.autoplay.stop(); // Stop autoplay on slide change (user swipes)
            console.log('change')
          }
        }}

        onTouchStart={()=>{
          handleInteraction()
        }}

        className="mySwiper"

      >   
        {img4slides}
      </Swiper>
    </>
  );
}
export default Swipelements