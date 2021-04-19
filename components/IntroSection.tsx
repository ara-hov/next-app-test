import React from "react";
import CustomPagination from "./sliders/CustomPagination";
import SectionHeading from "./SectionHeading";

const IntroSection = ({ title, slider, link, position, slideSize, addToWishList, color }: any) => {

  return (
    <section className="event-section">
      <SectionHeading title={title} link={link} />
      <div
        className={`navigation-${position} ${
          link === "/villas" || link === "/tours" ? "villas-slider" : ""
        }`}
      >
        {slider}
      </div>
    </section>
  );
};

export default IntroSection;
