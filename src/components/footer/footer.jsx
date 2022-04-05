import React from "react";
import { ImgWrapper, Left, LeftContent, Right, Wrapper } from "./footer.style";
import logo from "assets/resoursesImgs/logo.png";
import CallIcon from "@mui/icons-material/Call";
import { useSelector } from "react-redux";
import { getFooterData } from "store/reducer-and-action/language/language";

const Footer = () => {
  const footerData = useSelector(getFooterData);
  return (
    <Wrapper>
      <Left>
        <LeftContent>
          <ImgWrapper>
            <img src={logo} alt="logo" />
          </ImgWrapper>
          <div>
            <h3>{footerData.title}</h3>
            <p>{footerData.location}</p>
          </div>
        </LeftContent>
        <p style={{ opacity: "0.75" }}>{footerData.copyright}</p>
      </Left>
      <Right>
        <p>{footerData.requirement}</p>
        <p>
          {footerData.contact}: <CallIcon fontSize="small" /> 71 210-01-63
          <br />
          {footerData.acceptanceTime}, 09:00 - 18:00
        </p>
      </Right>
    </Wrapper>
  );
};

export default Footer;
