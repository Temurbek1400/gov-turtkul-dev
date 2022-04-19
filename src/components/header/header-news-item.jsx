import React from "react";
import { HeaderNewsItemWrapper } from "./header.styles";
// import "./test.css";

const HeaderNewsItem = ({ news }) => {
  let { images, title, body, date } = news;
  return (
    <HeaderNewsItemWrapper>
      <figure>
        <img src={images[0]} alt="news" />
        <figcaption>
          <p>{"Batafsil" || "More..."}</p>
        </figcaption>
      </figure>
      <div className="card-info">
        <p>{title}</p>
        <p>{date}</p>
      </div>
    </HeaderNewsItemWrapper>
  );
};

export default HeaderNewsItem;
