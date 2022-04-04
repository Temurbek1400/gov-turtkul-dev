import React from "react";
import { ImgWrapper, Left, LeftContent, Right, Wrapper } from "./footer.style";
import logo from "assets/resoursesImgs/logo.png";
// import { IoCallOutline } from "react-icons/io";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <Wrapper>
      <Left>
        <LeftContent>
          <ImgWrapper>
            <img src={logo} alt="logo" />
          </ImgWrapper>
          <div>
            <h3>To'rtko'l hokimligi rasmiy-veb sayti</h3>
            <p>
              ....... shahri, I.Karimov <br /> ko‘chasi, 51
            </p>
          </div>
        </LeftContent>
        <p>© 2022 To'rtko'l hokimligi. Barcha huquqlar himoyalangan.</p>
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
    </Wrapper>
  );
};

export default Footer;
