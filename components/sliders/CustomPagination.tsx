import React from "react";
import Icon from "@ant-design/icons";
import NextSvg from "@/icons/next.svg";
import PrevSvg from "@/icons/prev.svg";

const CustomPagination = ({
  color,
  handlePrev,
  handleNext,
  length,
  current,
  borderColor,
  arrowColor,
  activeBorderColor,
  otherPosNumberColor,
}) => {
  return (
    <div
      className="custom-pagination"
      style={{ background: color, borderColor: borderColor }}
    >
      <div className="pagination-cursors">
        <div
          className="next cursor"
          onClick={handleNext}
          style={{ borderColor: borderColor + "80" }}
        >
          <NextSvg className={`arrow-${arrowColor}`} />
        </div>

        <div
          className="prev cursor"
          onClick={handlePrev}
          style={{ borderColor: borderColor + "80" }}
        >
          <PrevSvg className={`arrow-${arrowColor}`} />
        </div>
      </div>
      <div
        className="pagination-position"
        style={{ borderBottomColor: borderColor }}
      >
        <span
          className={`arrow-${arrowColor} current-pos`}
          style={{ borderColor: activeBorderColor }}
        >
          {current.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
        <span className="other-pos" style={{ color: otherPosNumberColor }}>
          /{" "}
          {length.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
      </div>
    </div>
  );
};

export default CustomPagination;
