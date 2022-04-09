import { List, ListItemButton } from "@mui/material";
import { Title } from "components/swiper-imgs/swiper.style";
import { ItemWrapper } from "components/swiper-imgs/swiper.style";
import React from "react";
import { LeftData } from "./left-data";

const LeftContent = () => {
  return (
    <>
      <Title>Hello</Title>
      <List disablePadding>
        {LeftData.map((item, id) => (
          <ListItemButton
            disableGutters
            style={{ paddingTop: "0", paddingBottom: "0" }}
          >
            <ItemWrapper>{item}</ItemWrapper>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default LeftContent;
