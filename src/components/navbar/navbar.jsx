import * as React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch, useSelector } from "react-redux";

import CustomDrawer from "./drawers/custom-drawer";
import MobileDrawer from "./drawers/mobile/mobile-drawer";
import CustomAppBar from "./app-bars/app-bar";
import MobileAppBar from "./app-bars/mobile/mobile-app-bar";
import { Wrapper } from "./navbar.styles";
import Switch from "components/switch/switch";

import {
  fetchNews,
  getActiveFilter,
} from "./../../store/reducer-and-action/news/newsSlice";

import {
  getActiveLanguageName,
  getDrawerStatus,
  getLanguagesName,
  getNavbarData,
  setLanguage,
  toggleDrawerRedux,
} from "store/reducer-and-action/language/language";

const Navbar = () => {
  const navbarData = useSelector(getNavbarData);
  const drawerStatus = useSelector(getDrawerStatus);
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width:915px)");
  const toggleDrawer = (toggleTo) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    dispatch(toggleDrawerRedux(toggleTo));
  };
  const toggleDrawerMobile = (toggleTo) => {
    dispatch(toggleDrawerRedux(toggleTo));
  };

  return (
    <Wrapper>
      <React.Fragment key={"top"}>
        {matches ? (
          <>
            <MobileDrawer
              navbarData={navbarData}
              drawer={drawerStatus}
              toggleDrawerMobile={toggleDrawerMobile}
            />
            <MobileAppBar
              navbarData={navbarData}
              drawer={drawerStatus}
              toggleDrawerMobile={toggleDrawerMobile}
            />
          </>
        ) : (
          <>
            <CustomDrawer
              navbarData={navbarData}
              drawer={drawerStatus}
              toggleDrawer={toggleDrawer}
            />
            <CustomAppBar
              navbarData={navbarData}
              drawer={drawerStatus}
              toggleDrawer={toggleDrawer}
            />
          </>
        )}
      </React.Fragment>
    </Wrapper>
  );
};

export const LangSelect = () => {
  const languages = useSelector(getLanguagesName);
  const activeLanguageName = useSelector(getActiveLanguageName);
  const activeFilter = useSelector(getActiveFilter);
  const dispatch = useDispatch();
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">
        <LanguageIcon />
      </InputLabel>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="lang"
        value={activeLanguageName}
        onChange={(e) => {
          dispatch(setLanguage(e.target.value)).then(
            dispatch(fetchNews(activeFilter))
          );
        }}
      >
        {languages.map((lang) => (
          <MenuItem value={lang} key={lang}>
            {lang}
          </MenuItem>
        ))}
      </Select>
      <Switch />
    </FormControl>
  );
};

export default Navbar;
