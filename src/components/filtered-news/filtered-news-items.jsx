import React, { useEffect } from "react";
import { NewsItemWrapper, NewsInfo, NewsWrapper } from "./filtered-news.styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import NotFound from "components/not-found/not-found";
import EventIcon from "@mui/icons-material/Event";
import AOS from "aos";
import "aos/dist/aos.css";
import formatDate from "utils/formatDate";

const FilteredNewsItems = ({ news = [], newsFilter }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <NewsWrapper>
      {news.length ? (
        news.map((news_item) => (
          <div data-aos="fade-right" key={news_item.title}>
            <Link
              to={
                newsFilter
                  ? `/${newsFilter}/${news_item.id}`
                  : `/news/${news_item.filter}/${news_item.id}`
              }
              key={news_item.id}
            >
              <NewsItemWrapper role="tabpanel">
                <Grid
                  container
                  key={news_item.title}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    className="img-container"
                  >
                    <img
                      className="news-image"
                      src={news_item.imagesown}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <NewsInfo>
                      <h4>{news_item.title}</h4>
                      <h5>
                        <EventIcon /> {formatDate(news_item.date)}
                      </h5>
                    </NewsInfo>
                  </Grid>
                </Grid>
              </NewsItemWrapper>
            </Link>
          </div>
        ))
      ) : (
        <NotFound />
      )}
    </NewsWrapper>
  );
};

export default FilteredNewsItems;
