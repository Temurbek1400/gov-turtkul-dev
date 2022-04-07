import { List, ListItemButton } from "@mui/material";
import { ItemWrapper } from "components/swiper-imgs/swiper.style";
import React from "react";
import { LeftData } from "./left-data";

const LeftContent = () => {
  return (
    <List>
      {LeftData.map((item, id) => (
        <ListItemButton style={{ paddingTop: "0", paddingBottom: "0" }}>
          <ItemWrapper>{item}</ItemWrapper>
        </ListItemButton>
      ))}
    </List>
  );
};

export default LeftContent;
