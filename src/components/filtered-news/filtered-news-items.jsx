import React from "react";
import { NewsItemWrapper, NewsInfo, NewsWrapper } from "./filtered-news.styles";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import NotFound from "components/not-found/not-found";
import { useSelector } from "react-redux";
import { getActiveFilter } from "store/reducer-and-action/news/newsSlice";

const FilteredNewsItems = ({ news = [] }) => {
  const newsFilter = useSelector(getActiveFilter);
  return (
    <NewsWrapper>
      {news.length ? (
        news.map((news) => (
          <Link to={`/news/${newsFilter}/${news.id}`} key={news.id}>
            <NewsItemWrapper role="tabpanel">
              <Grid container key={news.title} columnSpacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <img src={news.images[0]} alt="" />
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={9}>
                  <NewsInfo>
                    <h2>{news.title}</h2>
                    <p>{news.body}</p>
                    <p>{news.date}</p>
                  </NewsInfo>
                </Grid>
              </Grid>
              <br />
              <Divider />
              <br />
            </NewsItemWrapper>
          </Link>
        ))
      ) : (
        <NotFound />
      )}
    </NewsWrapper>
  );
};

export default FilteredNewsItems;
