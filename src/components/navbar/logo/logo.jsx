import React, { useEffect } from "react";
import logo from "assets/site-logo.png";
import { LogoWrapper } from "./logo.styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Logo = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

<<<<<<< HEAD
  return (
    <div data-aos="fade-right">
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
    </div>
  );
=======
   return (
      <div data-aos="fade-right">
         <LogoWrapper>
            <Link to="/">
               <img src={logo} alt="logo" />
            </Link>
         </LogoWrapper>
      </div>
   );
>>>>>>> 44729a9943ee04ba647aebccea3b7ed63935f1a9
};

export default Logo;
