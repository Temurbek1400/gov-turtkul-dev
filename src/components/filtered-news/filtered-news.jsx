import React, { useEffect } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { MuiTabs, Wrapper } from "./filtered-news.styles";
import FilteredNewsItems from "./filtered-news-items";
import { useDispatch, useSelector } from "react-redux";
import { getFilterBarData } from "./../../store/reducer-and-action/language/language";
import {
  fetchNews,
  getActiveFilter,
  getNewsData,
  getNewsStatus,
} from "./../../store/reducer-and-action/news/newsSlice";
import Pagination from "./pagination/pagination";
import Loader from "components/common/loader";
import { useNavigate } from "react-router-dom";

export default function FilteredNews() {
  const news = useSelector(getNewsData);
  const filterBar = useSelector(getFilterBarData);
  const pending = useSelector(getNewsStatus);
  const dispatch = useDispatch();
  const activeFilter = useSelector(getActiveFilter);

  const navigate = useNavigate();
  const handleChange = (filter) => {
    dispatch(fetchNews(filter));
    navigate(`/news/${filter}`);
  };
  return (
    <Wrapper>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <MuiTabs value={activeFilter}>
            {filterBar.map((tabTitle) => (
              <Tab
                label={tabTitle.title}
                onClick={() => handleChange(tabTitle.filter)}
                value={tabTitle.filter}
              />
            ))}
          </MuiTabs>
        </Box>
        {pending ? <Loader /> : <FilteredNewsItems news={news} />}
      </Box>
      <Pagination />
    </Wrapper>
  );
}
