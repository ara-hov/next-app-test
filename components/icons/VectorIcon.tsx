import React from "react";
import Icon from "@ant-design/icons";
import Vector from "@/icons/vector.svg";

const VectorIcon = ({ color, ...rest }: any) => {
  return <Icon component={Vector} {...rest} />;
};

export default VectorIcon;
