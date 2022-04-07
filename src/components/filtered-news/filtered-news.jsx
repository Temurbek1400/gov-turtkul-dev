import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { MuiTabs, Wrapper } from "./filtered-news.styles";
import newsDataTemp from "../../mocks/newsDataTemp";
import FilteredNewsItems from "./filtered-news-items";
import { useDispatch, useSelector } from "react-redux";
import {
   fetchNews,
   getNewsData,
} from "./../../store/reducer-and-action/news/newsSlice";

export default function FilteredNews({ filteredNewsData }) {
   const news = useSelector(getNewsData);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchNews("capital"));
   }, [dispatch]);

   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Wrapper>
         <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
               <MuiTabs value={value} handleChange={handleChange}>
                  {["Kapital"].map((tabTitle, index) => (
                     <Tab label={tabTitle} {...a11yProps(index)} />
                  ))}
               </MuiTabs>
            </Box>
            <FilteredNewsItems value={value} newsDataTemp={news} />
         </Box>
      </Wrapper>
   );
}

const a11yProps = (index) => {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
};
