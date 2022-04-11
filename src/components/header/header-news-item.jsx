import React from "react";
import { HeaderNewsItemWrapper } from "./header.styles";

const HeaderNewsItem = ({ news }) => {
   debugger;
   return (
      <HeaderNewsItemWrapper>
         <img src={news?.images[0]} alt="" />
         <p>{news?.date}</p>
         <p>{news?.title}</p>
      </HeaderNewsItemWrapper>
   );
};

export default HeaderNewsItem;
