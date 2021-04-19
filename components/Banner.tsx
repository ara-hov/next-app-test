import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import styles from "../styles/banner.module.css";

const breakpoints = {
  1200: {
    slidesPerView: 6,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 0,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
};
const Banner = ({ handleScroll }) => {
  SwiperCore.use([Autoplay]);

  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `url(${
          "/images/banner.png"
        })`,
      }}
    >
      <div className={styles.banner_bottom}>
        <Swiper
          breakpoints={breakpoints}
          /* autoplay={{delay: 5000}}*/
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.banner_slider}
        >
          <SwiperSlide>
            <div className={styles.banner_slider_item}>
              <h3>Chemical brothers</h3>
              <p>16th Aug</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner_slider_item}>
              <h3>Skyline Sound</h3>
              <p>24th Aug</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner_slider_item}>
              <h3>Lorem Ipsum Night Pa ...</h3>
              <p>25th Aug</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner_slider_item}>
              <h3>Chemical brothers</h3>
              <p>16th Aug</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner_slider_item}>
              <h3>Skyline Sound</h3>
              <p>24th Aug</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner_slider_item}>
              <h3>Night Party</h3>
              <p>25th Aug</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner_slider_item}>
              <h3>Title 7</h3>
              <p>text 7</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          className={styles.scroll_down}
          onClick={handleScroll ? handleScroll : void 0}
        >
          <img src={"/images/arrow_down.png"} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
