import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { Wrapper } from "./header.styles";
import { Divider } from "@mui/material";
import { getNewsData  } from "store/reducer-and-action/news/newsSlice";
import HeaderNewsItem from './header-news-item';

const Header = () => {
   const news = useSelector(getNewsData);
   debugger;
   return (
      <Wrapper>
         <Grid container spacing={4}>
            <Grid item xs={12} sm={7} md={6}>
               <Divider />
               <br />
               <HeaderNewsItem news={news[0]} />
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
               <Divider />
               <br />
               <HeaderNewsItem news={news[1]} />
               <HeaderNewsItem news={news[2]} />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
               <Divider />
               <br />
            </Grid>
         </Grid>
      </Wrapper>
   );
};

export default Header;
