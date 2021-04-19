import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardSmall from "../cards/CardSmall";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import CardLarge from "../cards/CardLarge";
import CustomPagination from "./CustomPagination";

SwiperCore.use([Autoplay, Navigation, Pagination]);
const arr = [1, 2, 3, 4, 5, 6, 7, 8];



const Slider = ({
  addToWishList,
  breakpoints,
  size,
  color,
  length,
  online,
  rtl,
  title,
  borderColor,
  arrowColor,
  activeBorderColor,
  otherPosNumberColor,
}: any) => {
  const [sw, setSw] = useState(null);
  const [active, setActive] = useState(1);

  const handleNext = () => {
    sw.navigation.$nextEl.trigger("click");
  };
  const handlePrev = () => {
    sw.navigation.$prevEl.trigger("click");
  };
  return (
    <>
      <Swiper
        navigation
        dir={rtl ? "rtl" : ""}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        onSlideChange={(a) => setActive(a.activeIndex + 1)}
        onSwiper={(swiper) => {
          if (!sw) {
            console.log(swiper, "if");
            setSw(swiper);
          }
          console.log(swiper);
        }}
        className="info-slider"
        breakpoints={breakpoints}
      >
        {arr.map((el) => (
          <SwiperSlide key={el}>
            {size === "small" ? (
              <CardSmall
                title="title 1"
                img={"/images/club.png"}
                date={new Date().toLocaleDateString()}
                addToWishList={addToWishList}
              />
            ) : (
              <CardLarge
                title={title || "title 1"}
                img={"/images/villa.png"}
                addToWishList={addToWishList}
                online={online}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPagination
        color={color}
        borderColor={borderColor}
        handleNext={handleNext}
        handlePrev={handlePrev}
        length={length}
        current={active}
        arrowColor={arrowColor}
        activeBorderColor={activeBorderColor}
        otherPosNumberColor={otherPosNumberColor}
      />
    </>
  );
};

export default Slider;
