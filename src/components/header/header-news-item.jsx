import React from "react";
import { Link } from "react-router-dom";
import formatDate from "utils/formatDate";
import { HeaderNewsItemWrapper } from "./header.styles";

const HeaderNewsItem = ({ news }) => {
  return (
    <>
      {/* <Link
        to={
          newsFilter
            ? `/${newsFilter}/${news_item.id}`
            : `/news/${news_item.filter}/${news_item.id}`
        }
        key={news_item.id}
      > */}
        <HeaderNewsItemWrapper>
          <figure>
            <img src={news?.imagesown} alt="news" />
            <figcaption>
              <p>{"Batafsil" || "More..."}</p>
            </figcaption>
          </figure>
          <div className="card-info">
            <p>{news?.title}</p>
            <p>{formatDate(news?.date)}</p>
          </div>
        </HeaderNewsItemWrapper>
      {/* </Link> */}
    </>
  );
};

export default HeaderNewsItem;
