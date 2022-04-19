import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineDisconnect } from "react-icons/ai";
import { Wrapper, Left, Right } from "./spec-menu.styles";
import { Link } from "react-router-dom";
import { LangSelect } from "./lang-select";
import SwitchTheme from "components/switch/switch";

const SpecMenu = () => {
  return (
    <Wrapper>
      <Left>
        <div>
          <AiOutlineMail />
          <span>
            <a href="mailto:turtkul-gov@gmail.com">
              &nbsp; turtkul-gov@gmail.com
            </a>
          </span>
        </div>
        <div>
          <GoLocation />
          <span>
            <Link to="/">&nbsp;Toshkent shahri, I.Karimov kochasi, 51</Link>
          </span>
        </div>
        <div>
          <BsTelephone />
          <span>&nbsp; +998 99 999 99 99</span>
        </div>
      </Left>
      <Right>
        <SwitchTheme />
        <LangSelect />
        <div>
          <AiOutlineDisconnect />
          <span>
            <Link to="/">&nbsp;Qayta bog'lanish</Link>
          </span>
        </div>
      </Right>
    </Wrapper>
  );
};

export default SpecMenu;
