import { List, ListItemButton } from "@mui/material";
import { ItemWrapper } from "components/swiper-imgs/swiper.style";
import React from "react";
import { LeftData } from "./left-data";

const LeftContent = () => {
  return (
    <List>
      {LeftData.map((item, id) => (
        <ListItemButton key={id} style={{ padding: 0 }}>
          <ItemWrapper>{item}</ItemWrapper>
        </ListItemButton>
      ))}
    </List>
  );
};

export default LeftContent;
