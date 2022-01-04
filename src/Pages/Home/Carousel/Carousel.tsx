import React from "react";
// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";

// install Swiper module
SwiperCore.use([Autoplay]);

const Carousel = () => {
  return (
    <div className="flex py-12 border-b-2 border-gray-800 my-12 items-center w-11/12 mx-auto">
      <div className="w-1/5">
        <h1 className="text-center text-3xl font-bold text-black dark:text-white md:text-4xl border-r-4 border-gray-800">
          Our Partner
        </h1>
      </div>
      <div className="w-4/5">
        <div className="text-start">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            speed={6000}
            navigation={true}
            className="mySwiper"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img src="https://i.ibb.co/ZSc5Qgf/logo-2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/9HNN49S/logo-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/x13zq6N/logo-3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/BzVfHcw/logo-4.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/jHGRwst/logo-5.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/0j8zQcj/logo-6.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
