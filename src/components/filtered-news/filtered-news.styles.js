import styled from "styled-components";
import Tabs from "@mui/material/Tabs";

export const MuiTabs = ({ value, handleChange, children }) => (
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

export const Wrapper = styled.div``;
