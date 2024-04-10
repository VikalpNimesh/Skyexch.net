import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const CarouselSection = () => {
  return (
    <div className="carousel-section">
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
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
          }
        }}      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className="big-box">
        <div className="column-meta">
          <div className="date">
            <span className="status">Live</span>
            <span className="day">5 April 2024</span>
          </div>
        </div>
        <div className="column-teams">
          <div className="teams">
            <div className="teamA">
              <div className="teamLogo">
                <img
                  src="https://images.entitysport.com/assets/uploads/2023/05/Oman.png"
                  alt=""
                />
              </div>
              <div className="teamName">OMN</div>
            </div>
            <div className="teamA ">
              <div className="teamB">
                <div className="teamLogo">
                  <img
                    src="https://images.entitysport.com/assets/uploads/2023/05/Oman.png"
                    alt=""
                  />
                </div>
                <div className="teamName">OMN</div>
              </div>
              <div className="teamScore">*130/4 (17 ov)</div>
            </div>
          </div>
        </div>
        <div className="column-action">
          <div className="text">Oman elected to bowl</div>
        </div>
      </div></SwiperSlide>
      <SwiperSlide><div className="big-box">
        <div className="column-meta">
          <div className="date">
            <span className="status">Live</span>
            <span className="day">5 April 2024</span>
          </div>
        </div>
        <div className="column-teams">
          <div className="teams">
            <div className="teamA">
              <div className="teamLogo">
                <img
                  src="https://images.entitysport.com/assets/uploads/2023/05/Oman.png"
                  alt=""
                />
              </div>
              <div className="teamName">OMN</div>
            </div>
            <div className="teamA ">
              <div className="teamB">
                <div className="teamLogo">
                  <img
                    src="https://images.entitysport.com/assets/uploads/2023/05/Oman.png"
                    alt=""
                  />
                </div>
                <div className="teamName">OMN</div>
              </div>
              <div className="teamScore">*130/4 (17 ov)</div>
            </div>
          </div>
        </div>
        <div className="column-action">
          <div className="text">Oman elected to bowl</div>
        </div>
      </div></SwiperSlide>
      <SwiperSlide><div className="big-box">
        <div className="column-meta">
          <div className="date">
            <span className="status">Live</span>
            <span className="day">5 April 2024</span>
          </div>
        </div>
        <div className="column-teams">
          <div className="teams">
            <div className="teamA">
              <div className="teamLogo">
                <img
                  src="https://images.entitysport.com/assets/uploads/2023/05/Oman.png"
                  alt=""
                />
              </div>
              <div className="teamName">OMN</div>
            </div>
            <div className="teamA ">
              <div className="teamB">
                <div className="teamLogo">
                  <img
                    src="https://images.entitysport.com/assets/uploads/2023/05/Oman.png"
                    alt=""
                  />
                </div>
                <div className="teamName">OMN</div>
              </div>
              <div className="teamScore">*130/4 (17 ov)</div>
            </div>
          </div>
        </div>
        <div className="column-action">
          <div className="text">Oman elected to bowl</div>
        </div>
      </div></SwiperSlide>
      <SwiperSlide><div className="big-box">
        <div className="column-meta">
          <div className="date">
            <span className="status">Live</span>
            <span className="day">5 April 2024</span>
          </div>
        </div>
        <div className="column-teams">
          <div className="teams">
            <div className="teamA">
              <div className="teamLogo">
                <img
                  src="https://images.entitysport.com/assets/uploads/2023/05/Oman.png"
                  alt=""
                />
              </div>
              <div className="teamName">OMN</div>
            </div>
            <div className="teamA ">
              <div className="teamB">
                <div className="teamLogo">
                  <img
                    src="https://images.entitysport.com/assets/uploads/2023/05/Oman.png"
                    alt=""
                  />
                </div>
                <div className="teamName">OMN</div>
              </div>
              <div className="teamScore">*130/4 (17 ov)</div>
            </div>
          </div>
        </div>
        <div className="column-action">
          <div className="text">Oman elected to bowl</div>
        </div>
      </div></SwiperSlide>
      <SwiperSlide><div className="big-box">
        <div className="column-meta">
          <div className="date">
            <span className="status">Live</span>
            <span className="day">5 April 2024</span>
          </div>
        </div>
        <div className="column-teams">
          <div className="teams">
            <div className="teamA">
              <div className="teamLogo">
                <img
                  src="https://images.entitysport.com/assets/uploads/2023/05/Oman.png"
                  alt=""
                />
              </div>
              <div className="teamName">OMN</div>
            </div>
            <div className="teamA ">
              <div className="teamB">
                <div className="teamLogo">
                  <img
                    src="https://images.entitysport.com/assets/uploads/2023/05/Oman.png"
                    alt=""
                  />
                </div>
                <div className="teamName">OMN</div>
              </div>
              <div className="teamScore">*130/4 (17 ov)</div>
            </div>
          </div>
        </div>
        <div className="column-action">
          <div className="text">Oman elected to bowl</div>
        </div>
      </div></SwiperSlide>
    </Swiper>
      
    </div>
  );
};

export default CarouselSection;
