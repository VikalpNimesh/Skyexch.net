import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Sponser = () => {
  return (
    <div className="sponser-section">
      <h2>
        <span>OUR SPONSORSHIPS</span>
      </h2>
      <Swiper className="swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          880: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation
        autoplay={{ delay: 1500 }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="sponser-carausel-box">
            <div className="item">
              <img
                src="https://skyexch.net/wp-content/themes/the-league-child/images/lpl-t20.png"
                alt="lpl t20"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponser-carausel-box">
            <div className="item">
              <img
                src="https://skyexch.net/wp-content/themes/the-league-child/images/lpl-t20.png"
                alt="lpl t20"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponser-carausel-box">
            <div className="item">
              <img
                src="https://skyexch.net/wp-content/themes/the-league-child/images/lpl-t20.png"
                alt="lpl t20"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponser-carausel-box">
            <div className="item">
              <img
                src="https://skyexch.net/wp-content/themes/the-league-child/images/lpl-t20.png"
                alt="lpl t20"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponser-carausel-box">
            <div className="item">
              <img
                src="https://skyexch.net/wp-content/themes/the-league-child/images/lpl-t20.png"
                alt="lpl t20"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponser-carausel-box">
            <div className="item">
              <img
                src="https://skyexch.net/wp-content/themes/the-league-child/images/lpl-t20.png"
                alt="lpl t20"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sponser;
