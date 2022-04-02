import * as React from "react";
import { CustomDrawer } from "./drawer/drawer";
import CustomAppBar from "./app-bar/app-bar";
import navbarData from "./navbarData";

export default function Navbar() {
   const [drawer, setState] = React.useState(false);
   const toggleDrawer = (toggleTo) => (event) => {
      if (
         event.type === "keydown" &&
         (event.key === "Tab" || event.key === "Shift")
      )
         return;

      setState(toggleTo);
   };

   return (
      <div>
         <React.Fragment key={"top"}>
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
         </React.Fragment>
      </div>
   );
}
