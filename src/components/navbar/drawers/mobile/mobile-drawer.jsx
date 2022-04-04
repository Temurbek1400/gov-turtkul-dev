import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { DrawerMobile } from "./mobile-drawer.styles";
import { DrawerHeader } from "./mobile-drawer.styles";
import MobileDrawerList from "./mobile-drawer-list";

export default function MobileDrawer({
   drawer,
   toggleDrawerMobile,
   navbarData,
}) {
   const theme = useTheme();
   return (
      <DrawerMobile variant="persistent" anchor="left" open={drawer}>
         <DrawerHeader>
            <IconButton onClick={() => toggleDrawerMobile(false)}>
               {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
               ) : (
                  <ChevronRightIcon />
               )}
            </IconButton>
         </DrawerHeader>
         <Divider />
         <MobileDrawerList navbarData={navbarData} />
      </DrawerMobile>
   );
}
