import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image width="205" height="26" href={isDark ? '/images/pixel/LogoDark.png' : '/images/pixel/LogoWhite.png'}/>
    </Svg>
  );
};

export default Icon;
