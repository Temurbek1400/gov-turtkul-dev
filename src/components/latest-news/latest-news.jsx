import { Divider } from "@mui/material";
import { scheduleData } from "./latest-news.data";
import { CustomPaper, Title, Box, Wrapper } from "./latest-news.style";
import News from "./news/news";
import Schedule from "./schedule/schedule";

const LatestNews = () => {
  return (
    <Wrapper>
      <div>
        <Title>So`nggi yangiliklar</Title>
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
        <Title>Shahar ishlari rejasi</Title>
        <Divider />
        <Schedule data={scheduleData} />
      </div>
    </Wrapper>
  );
};

export default LatestNews;
