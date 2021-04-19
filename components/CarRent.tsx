import React from "react";
import SectionHeading from "./SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import CardCar from "./cards/CardCar";

const breakpoints = {
  1200: {
    slidesPerView: 4,
    spaceBetween: 70,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
};
const arr = [1, 2, 3, 4, 5, 6, 7];
const CarRent = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const addToWishList = () => {};
  return (
    <section className="event-section">
      <SectionHeading title="Rent transport" link="/rent-car" />
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="info-slider car-slider"
        breakpoints={breakpoints}
      >
        {arr.map((el) => (
          <SwiperSlide key={el}>
            <CardCar
              title="Car 1"
              addToWishList={addToWishList}
              img={"/images/car.png"}
              price="53"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarRent;
