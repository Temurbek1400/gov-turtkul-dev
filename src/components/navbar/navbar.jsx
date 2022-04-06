import * as React from "react";
import { useMediaQuery } from "@mui/material";

import CustomDrawer from "./drawers/custom-drawer";
import MobileDrawer from "./drawers/mobile/mobile-drawer";

import CustomAppBar from "./app-bars/app-bar";
import MobileAppBar from "./app-bars/mobile/mobile-app-bar";
import { Wrapper } from "./navbar.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, getActiveFilter } from './../../store/reducer-and-action/news/newsSlice';
import {
  getLanguagesName,
  getNavbarData,
  setLanguage,
} from "store/reducer-and-action/language/language";

export default function Navbar() {
  const matches = useMediaQuery("(max-width:915px)");
  const [drawer, setState] = React.useState(false);
  const toggleDrawer = (toggleTo) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setState(toggleTo);
  };
  const toggleDrawerMobile = (toggleTo) => {
    setState(toggleTo);
  };

  const navbarData = useSelector(getNavbarData);
  const languages = useSelector(getLanguagesName);
  const activeFilter=useSelector(getActiveFilter)
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <select onChange={(e) => {
        dispatch(setLanguage(e.target.value))
        .then(
        dispatch(fetchNews(activeFilter)))}
        }>
        {languages.map((lang) => (
          <option value={lang}>{lang}</option>
        ))}
      </select>
      <React.Fragment key={"top"}>
        {matches ? (
          <>
            <MobileDrawer
              navbarData={navbarData}
              drawer={drawer}
              toggleDrawerMobile={toggleDrawerMobile}
            />
            <MobileAppBar
              navbarData={navbarData}
              drawer={drawer}
              toggleDrawerMobile={toggleDrawerMobile}
            />
          </>
        ) : (
          <>
            <CustomDrawer
              navbarData={navbarData}
              drawer={drawer}
              toggleDrawer={toggleDrawer}
            />
            <CustomAppBar
              navbarData={navbarData}
              drawer={drawer}
              toggleDrawer={toggleDrawer}
            />
          </>
        )}
      </React.Fragment>
    </Wrapper>
  );
}
