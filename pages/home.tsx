import React, { useRef } from "react";
import Banner from "../components/Banner";
import IntroSection from "@/components/IntroSection";
import Slider from "@/components/sliders/Slider";
import CarRent from "../components/CarRent";

const breakpoints = {
  1200: {
    slidesPerView: 3.7,
    spaceBetween: 24,
  },
  768: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  320: {
    slidesPerView: 1.3,
    spaceBetween: 10,
  },
};
const villaBreakpoints = {
  1200: {
    slidesPerView: 3.2,
    spaceBetween: 24,
  },
  768: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  320: {
    slidesPerView: 1.3,
    spaceBetween: 10,
  },
};
const Home = () => {
  const ref = useRef(null);
  const handleScroll = () => {
    console.log(ref);
    ref.current.scrollIntoView();
  };
  const eventWishList = () => {
    console.log("event");
  };
  return (
    <div id="home">
      <Banner handleScroll={handleScroll} />
      <div ref={ref}></div>
      <IntroSection
        title="Online"
        link="/online"
        position="left"
        slideSize="25%"
        addToWishList={eventWishList}
        color="#1F1F24"
        slider={
          <Slider
            color="white"
            arrowColor={"dark"}
            borderColor={"#1f1f24"}
            activeBorderColor={"#0085ff"}
            otherPosNumberColor={"#1f1f24"}
            online={true}
            size="large"
            addToWishList={eventWishList}
            breakpoints={villaBreakpoints}
            length={8}
          />
        }
      />
      <IntroSection
        title="Events"
        link="/events"
        position="right"
        slideSize="25%"
        addToWishList={eventWishList}
        color="#FFD600"
        slider={
          <Slider
            rtl={true}
            color="#ffffff"
            arrowColor={"dark"}
            activeBorderColor={"#ffd600"}
            otherPosNumberColor={"#1f1f24"}
            size="small"
            addToWishList={eventWishList}
            breakpoints={breakpoints}
            length={8}
            borderColor={"#ffd600"}
          />
        }
      />
      <IntroSection
        title="Restaurants"
        link="/restaurants"
        position="left"
        slideSize="25%"
        addToWishList={eventWishList}
        color="#0085FF"
        slider={
          <Slider
            color="#ffffff"
            borderColor={"#0085FF"}
            arrowColor={"blue"}
            activeBorderColor={"#0085ff"}
            otherPosNumberColor={"#1f1f24"}
            size="small"
            addToWishList={eventWishList}
            breakpoints={breakpoints}
            length={8}
          />
        }
      />
      <IntroSection
        title="Clubs"
        link="/clubs"
        position="right"
        addToWishList={eventWishList}
        color="#FFD600"
        slideSize="25%"
        slider={
          <Slider
            rtl={true}
            arrowColor={"dark"}
            color="#ffffff"
            borderColor={"#ffd600"}
            activeBorderColor={"#ffd600"}
            otherPosNumberColor={"#1f1f24"}
            size="small"
            addToWishList={eventWishList}
            breakpoints={breakpoints}
            length={8}
          />
        }
      />
      <IntroSection
        title="Tours"
        link="/tours"
        position="center"
        addToWishList={eventWishList}
        color="#0085FF"
        slider={
          <Slider
            color="#ffffff"
            borderColor={"#0085FF"}
            arrowColor={"blue"}
            activeBorderColor={"#0085ff"}
            otherPosNumberColor={"#0085ff"}
            size="large"
            addToWishList={eventWishList}
            breakpoints={villaBreakpoints}
            length={8}
            title="Tours"
          />
        }
      />

      <IntroSection
        title="Villas"
        link="/villas"
        position="center"
        addToWishList={eventWishList}
        color="#EB5757"
        slider={
          <Slider
            color="#ffffff"
            borderColor={"#eb5757"}
            arrowColor={"red"}
            activeBorderColor={"#eb5757"}
            otherPosNumberColor={"#eb5757"}
            size="large"
            addToWishList={eventWishList}
            breakpoints={villaBreakpoints}
            length={8}
          />
        }
      />
      <CarRent />
    </div>
  );
};

export default Home;
