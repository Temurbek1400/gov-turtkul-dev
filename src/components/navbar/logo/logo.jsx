import React, { useEffect } from "react";
import logo from "assets/site-logo.png";
import { LogoWrapper } from "./logo.styles";
import AOS from "aos";
import "aos/dist/aos.css";

const Logo = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-right">
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
    </div>
  );
};

export default Logo;
