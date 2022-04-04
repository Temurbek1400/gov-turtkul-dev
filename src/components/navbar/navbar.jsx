import * as React from "react";
import { useMediaQuery } from "@mui/material";
import navbarData from "./navbarData";

import CustomDrawer from "./drawers/custom-drawer";
import MobileDrawer from "./drawers/mobile/mobile-drawer";

import CustomAppBar from "./app-bars/app-bar";
import MobileAppBar from "./app-bars/mobile/mobile-app-bar";


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

   return (
      <div>
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
      </div>
   );
}
