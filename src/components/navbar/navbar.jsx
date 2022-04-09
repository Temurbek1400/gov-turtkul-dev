import * as React from "react";
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   useMediaQuery,
} from "@mui/material";

import CustomDrawer from "./drawers/custom-drawer";
import MobileDrawer from "./drawers/mobile/mobile-drawer";
import CustomAppBar from "./app-bars/app-bar";
import MobileAppBar from "./app-bars/mobile/mobile-app-bar";
import { Wrapper } from "./navbar.styles";
import { useDispatch, useSelector } from "react-redux";
import {
   fetchNews,
   getActiveFilter,
} from "./../../store/reducer-and-action/news/newsSlice";
import {
   getActiveLanguageName,
   getLanguagesName,
   getNavbarData,
   setLanguage,
} from "store/reducer-and-action/language/language";

const Navbar = () => {
   const navbarData = useSelector(getNavbarData);
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

   return (
      <Wrapper>
         <LangSelect />
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
};

const LangSelect = () => {
   const languages = useSelector(getLanguagesName);
   const activeLanguageName = useSelector(getActiveLanguageName);
   const activeFilter = useSelector(getActiveFilter);
   const dispatch = useDispatch();
   return (
      <FormControl>
         <InputLabel id="demo-simple-select-label">Til</InputLabel>
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
               <MenuItem value={lang}>{lang}</MenuItem>
            ))}
         </Select>
      </FormControl>
   );
};

export default Navbar;
