import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNews,
  getNewsData,
} from "store/reducer-and-action/news/newsSlice";
import { Title, Wrapper } from "./latest-news.style";
import News from "./news/news";
import Schedule from "./schedule/schedule";

const LatestNews = ({ news, plan }) => {
  const dispatch = useDispatch();
  const newsData = useSelector(getNewsData);

  useEffect(() => {
    dispatch(fetchNews("all"));
  }, [dispatch]);

  return (
    <Wrapper>
      <div>
        <Title>{news.title}</Title>
        <Divider />
        <News newsData={newsData} />
      </div>
      <div>
        <Title>{plan.title}</Title>
        <Divider />
        <Schedule data={plan.data} />
      </div>
    </Wrapper>
  );
};

export default LatestNews;
