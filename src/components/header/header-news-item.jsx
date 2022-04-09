import React from "react";
import { HeaderNewsItemWrapper } from "./header.styles";

const HeaderNewsItem = ({ news }) => {
   debugger;
   return (
      <HeaderNewsItemWrapper>
         <img src={news?.img} alt="" />
      </HeaderNewsItemWrapper>
   );
};

export default HeaderNewsItem;
