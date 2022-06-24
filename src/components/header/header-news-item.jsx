import React from "react";
import { Link } from "react-router-dom";
import formatDate from "utils/formatDate";
import { HeaderNewsItemWrapper } from "./header.styles";

const HeaderNewsItem = ({ news: news_item }) => {
  return (
    <>
      <Link
        to={`/news/${news_item?.filter}/${news_item?.id}`}
        key={news_item?.id}
      >
        <HeaderNewsItemWrapper>
          <figure>
            <img src={news_item?.imagesown} alt="news" />
            <figcaption>
              <p>{"Batafsil" || "More..."}</p>
            </figcaption>
          </figure>
          <div className="card-info">
            <p>{news_item?.title}</p>
            <p>{formatDate(news_item?.date)}</p>
          </div>
        </HeaderNewsItemWrapper>
      </Link>
    </>
  );
};

export default HeaderNewsItem;
