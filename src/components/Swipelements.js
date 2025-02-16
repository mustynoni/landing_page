import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import React from 'react';


const Swipelements = ({images=[], swipenexter, handleInteraction }) => {
  const swiperRef = swipenexter; 

  const img4slides = images.map((image, index)=>(<SwiperSlide key={index}><img alt={'Someone cleaning'} src={image} loading='lazy'></img></SwiperSlide>))
 
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
        rewind={true}
        threshold={1}
        // loop={true}
        modules={[Pagination, Navigation, Autoplay]} 
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        onSlideChange={() => {
          console.log(swiperRef.current.slides.length)
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