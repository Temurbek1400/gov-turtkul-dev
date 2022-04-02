import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import lists from "./sidebarData";
import { NavbarList } from "./navbar-list";
import { CloseButton, ListContainer } from "./navbar.style";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
   const [drawer, setState] = React.useState(false);

   const toggleDrawer = (toggleTo) => (event) => {
      if (
         event.type === "keydown" &&
         (event.key === "Tab" || event.key === "Shift")
      ) return;

      setState(toggleTo);
   };

   return (
      <div>
         <React.Fragment key={"top"}>
            <Button onClick={toggleDrawer(true)}>
               <DensityMediumIcon />
            </Button>
            <Drawer anchor={"top"} open={drawer} onClose={toggleDrawer(false)}>
               <CloseButton onClick={toggleDrawer(false)}>
                  <CloseIcon />
               </CloseButton>
               <ListContainer>
                  {lists.map((listData) => (
                     <NavbarList
                        toggleDrawer={toggleDrawer}
                        listData={listData}
                     />
                  ))}
               </ListContainer>
            </Drawer>
         </React.Fragment>
      </div>
   );
}
