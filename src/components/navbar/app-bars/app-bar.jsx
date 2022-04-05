import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

import { IconWrapperButton } from "./app-bar.styles";
import AppBarItem from "./app-bar-item";
import SearchInput from "./search-input";

export default function CustomAppBar({ toggleDrawer, navbarData }) {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <IconWrapperButton onClick={toggleDrawer(true)}>
                  <DensityMediumIcon />
               </IconWrapperButton>
               {navbarData.map((data) => (
                  <AppBarItem data={data} />
               ))}
               <SearchInput />
            </Toolbar>
         </AppBar>
      </Box>
   );
}
