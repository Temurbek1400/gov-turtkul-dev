import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { MuiTabs, PreloaderWrapper, Wrapper } from "./filtered-news.styles";
import FilteredNewsItems from "./filtered-news-items";
import { useDispatch, useSelector } from "react-redux";
import { getFilterBarData } from "./../../store/reducer-and-action/language/language";
import {
   fetchNews,
   getNewsData,
   getNewsStatus,
} from "./../../store/reducer-and-action/news/newsSlice";
import { PropagateLoader } from "react-spinners";
import Pagination from "./pagination/pagination";

export default function FilteredNews() {
   const news = useSelector(getNewsData);
   const filterBar = useSelector(getFilterBarData);
   const pending = useSelector(getNewsStatus);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchNews("capital"));
   }, [dispatch]);

   const [value, setValue] = React.useState(0);

   const handleChange = (filter, newValue) => {
      dispatch(fetchNews(filter));
      setValue(newValue);
   };
   return (
      <Wrapper>
         <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
               <MuiTabs value={value}>
                  {filterBar.map((tabTitle, index) => (
                     <Tab
                        label={tabTitle.title}
                        onClick={() => handleChange(tabTitle.filter, index)}
                     />
                  ))}
               </MuiTabs>
            </Box>
            {pending ? (
               <PreloaderWrapper>
                  <PropagateLoader size={15} color="#0156a7;" />
               </PreloaderWrapper>
            ) : (
               <FilteredNewsItems news={news} />
            )}
         </Box>
         <Pagination />
      </Wrapper>
   );
}
