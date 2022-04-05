import { MdOutlineWatchLater } from "react-icons/md";
import { MainBody, Time, Wrapper } from "./news.style";
const News = ({ time, info }) => {
  const truncatedData = info.length > 100 ? info.slice(0, 100) + "..." : info;
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
