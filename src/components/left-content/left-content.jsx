import { List, ListItemButton } from "@mui/material";
import { Title } from "components/swiper-imgs/swiper.style";
import { ItemWrapper } from "components/swiper-imgs/swiper.style";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getNavbarData } from "store/reducer-and-action/language/language";

const LeftContent = () => {
  let params = useParams();
  const currentList = useSelector(getNavbarData).find(
    (part) => part.link === params.navbarRoutes
  );
  if (currentList)
    return (
      <>
        <Title>{currentList.head}</Title>
        <List disablePadding>
          {currentList.list.map((item, id) => (
            <Link to={`${currentList.link}/${item.route}`}>
              <ListItemButton
                disableGutters
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                <ItemWrapper active={item.route === params.navRoute}>
                  {item.title}
                </ItemWrapper>
              </ListItemButton>
            </Link>
          ))}
        </List>
      </>
    );
};

export default LeftContent;
