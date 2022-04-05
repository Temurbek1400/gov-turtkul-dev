import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar } from "./mobile-app-bar.styles";
import SearchInput from "../search-input";

const MobileAppBar = ({ drawer, toggleDrawerMobile }) => {
   return (
      <Box sx={{ display: "flex" }}>
         <CssBaseline />
         <AppBar position="static" open={drawer}>
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => toggleDrawerMobile(true)}
                  edge="start"
                  sx={{ mr: 2, ...(drawer && { display: "none" }) }}
               >
                  <MenuIcon />
               </IconButton>
               <SearchInput />
            </Toolbar>
         </AppBar>
      </Box>
   );
};

export default MobileAppBar;
