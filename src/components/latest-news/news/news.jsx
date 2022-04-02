import { MdOutlineWatchLater } from "react-icons/md";
import { MainBody, Time, Wrapper } from "./news.style";

const News = ({ time, data }) => {
  const truncatedData =
    data.length > 140 ? (data = data.slice(0, 140) + "...") : data;
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
