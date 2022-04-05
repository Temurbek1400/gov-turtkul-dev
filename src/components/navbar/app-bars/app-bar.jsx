import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import IconButton  from '@mui/material/IconButton';

import AppBarItem from "./app-bar-item";
import SearchInput from "./search-input";
import Logo from "../gov-info/logo";

export default function CustomAppBar({ toggleDrawer, navbarData }) {
   return (
      <Box sx={{ flexGrow: 1 }} >
         <AppBar color="transparent" position="static" sx={{height: 100}}>
            <Toolbar sx={{alignItems: "center", margin: "auto 0"}}>
               <Logo />
               <IconButton onClick={toggleDrawer(true)}>
                  <DensityMediumIcon />
               </IconButton>
               {navbarData.map((data) => (
                  <AppBarItem data={data} />
               ))}
               <SearchInput />
            </Toolbar>
         </AppBar>
      </Box>
   );
}
