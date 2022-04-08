import React from "react";
import { NewsItemWrapper, NewsInfo, NewsWrapper } from "./filtered-news.styles";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

const FilteredNewsItems = ({ news }) => {
   return (
      <NewsWrapper>
         {news.map((news) => (
            <NewsItemWrapper role="tabpanel">
               <Grid container key={news.title} columnSpacing={2}>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                     <img src={news.images[0]} alt="" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={8} lg={9}>
                     <NewsInfo>
                        <h2>{news.title}</h2>
                        <p>{news.p}</p>
                        <p>{news.date}</p>
                     </NewsInfo>
                  </Grid>
               </Grid>
               <br />
               <Divider />
               <div><br /></div>
            </NewsItemWrapper>
         ))}
      </NewsWrapper>
   );
};

export default FilteredNewsItems;
