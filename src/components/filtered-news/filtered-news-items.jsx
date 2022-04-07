import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FilteredNewsItems = ({ news }) => {
   return (
      <div>
         {news.map((news) => (
            <TabPanel index={0}>
               <div>
                  <img src={news.images[0]} alt="" width="400" />
                  <h1>{news.title}</h1>
                  <p>{news.p}</p>
               </div>
            </TabPanel>
         ))}
      </div>
   );
};
const TabPanel = (props) => {
   const { children, ...other } = props;
   return (
      <div role="tabpanel" {...other}>
         <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
         </Box>
      </div>
   );
};
export default FilteredNewsItems;
