import React from "react";
import logo from "assets/site-logo.png";
import { LogoWrapper } from "./gov-info-styles";

const Logo = () => {
   return (
      <LogoWrapper>
         <img src={logo} alt="logo" />
      </LogoWrapper>
   );
};

export default Logo;
