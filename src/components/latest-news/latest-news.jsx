import { Divider } from "@mui/material";
import { CustomPaper, Title, Box } from "./latest-news.style";
import News from "./news/news";

const LatestNews = () => {
  return (
    <>
      <Title>So`nggi yangiliklar</Title>
      <Divider />
      <CustomPaper elevation={3}>
        <Box>
          {[1, 2, 4, 5, 6, 7, 8].map((item) => (
            <News
              time={"12.00"}
              data={
                "aadklj  adlksdklfjflk osakfjladsfl kljlsadklfjklas kljkasdfjlk kljkasf dklj aadklj  adlksdklfjflk osakfjladsfl kljlsadklfjklas kljkasdfjlk kljkasf dklj aadklj  adlksdklfjflk osakfjladsfl kljlsadklfjklas kljkasdfjlk kljkasf dklj aadklj  adlksdklfjflk osakfjladsfl kljlsadklfjklas kljkasdfjlk kljkasf dklj  "
              }
            />
          ))}
        </Box>
      </CustomPaper>
    </>
  );
};

export default LatestNews;
