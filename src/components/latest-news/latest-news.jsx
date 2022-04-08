import { Divider } from "@mui/material";
import { scheduleData } from "./latest-news.data";
import { CustomPaper, Title, Box, Wrapper } from "./latest-news.style";
import News from "./news/news";
import Schedule from "./schedule/schedule";

const LatestNews = ({ news, plan }) => {
  return (
    <Wrapper>
      <div>
        <Title>{news.title}</Title>
        <Divider />
        <CustomPaper elevation={3}>
          <Box>
            {scheduleData.map((item) => (
              <News key={item.time} time={item.time} info={item.info} />
            ))}
          </Box>
        </CustomPaper>
      </div>
      <div>
        {plan}
        {/* <Title>{plan.title}</Title> */}
        <Divider />
        <Schedule data={scheduleData} />
      </div>
    </Wrapper>
  );
};

export default LatestNews;
