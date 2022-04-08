import styled from "styled-components";
import Tabs from "@mui/material/Tabs";

export const MuiTabs = ({ value, handleChange, children }) => {
   return (
      <Tabs
         TabIndicatorProps={{ sx: { display: "none" } }}
         sx={{
            "& .MuiTabs-flexContainer": {
               flexWrap: "wrap",
            },
         }}
         value={value}
         onChange={handleChange}
         aria-label="basic tabs example"
      >
         {children}
      </Tabs>
   );
};
export const PreloaderWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 400px;
   & > * {
      color: #0156a7;
   }
`;
export const Wrapper = styled.div``;

export const NewsWrapper = styled.div`
   /* width: 100%;
   @media screen and (max-width: 768px) {
      width: 100%;
   } */
`;
export const NewsItemWrapper = styled.div`
   /* display: flex;
   justify-content: space-between;*/
   & img {
      width: 100%;
   }
   /*@media screen and (max-width: 768px) {
   } */
`;
export const NewsInfo = styled.div`
   margin-left: 20px;
   & h2 {
      color: ${props => props.theme.primary};
   }
`;
