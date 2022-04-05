import React from "react";
import {
  ImgWrapper,
  FooterTop,
  Right,
  Wrapper,
  Left,
  FooterBottom,
} from "./footer.style";
import logo from "assets/resoursesImgs/logo.png";
import CallIcon from "@mui/icons-material/Call";
import stiker from "assets/footerImg/stiker.PNG";

const Footer = () => {
  return (
    <Wrapper>
      <FooterTop>
        <Left>
          <ImgWrapper>
            <img src={logo} alt="logo" />
          </ImgWrapper>
          <div>
            <h3>To'rtko'l hokimligi rasmiy-veb sayti</h3>
            <p>
              To'rtko'l shahri, I.Karimov <br /> ko‘chasi, 51
            </p>
          </div>
        </Left>
        <Right>
          <p>
            Ushbu saytda chop etilgan materiallardan foydalanishda ulanish talab
            qilinadi.
          </p>
          <p>
            Matbuot xizmati: <CallIcon fontSize="small" /> 71 210-01-63
            <br />
            Dushanba - Juma, 09:00 - 18:00
          </p>
        </Right>
      </FooterTop>

      <FooterBottom>
        <p>© 2022 To'rtko'l hokimligi. Barcha huquqlar himoyalangan.</p>
        <img src={stiker} alt="no img" />
      </FooterBottom>
    </Wrapper>
  );
};

export default Footer;
