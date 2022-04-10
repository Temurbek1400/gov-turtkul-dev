import Loader from "components/common/loader";
import { MdOutlineWatchLater } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNewsStatus } from "store/reducer-and-action/news/newsSlice";
import { CustomPaper, MainBody, Time, Wrapper, Box } from "./news.style";
const News = ({ newsData }) => {
  const pending = useSelector(getNewsStatus);

  return (
    <CustomPaper elevation={3}>
      {pending ? (
        <Loader />
      ) : (
        <Box>
          {newsData.map((item) => (
            <Link to={`news/all-news/${item.id}`}>
              <SingleNews
                key={item.title}
                time={item.date}
                title={item.title}
              />
            </Link>
          ))}
        </Box>
      )}
    </CustomPaper>
  );
};

const SingleNews = ({ time, title }) => {
  const truncatedData =
    title.length > 100 ? title.slice(0, 100) + "..." : title;
  return (
    <Wrapper>
      <Time>
        <MdOutlineWatchLater /> {time}
      </Time>
      <MainBody>{truncatedData}</MainBody>
    </Wrapper>
  );
};

export default News;
