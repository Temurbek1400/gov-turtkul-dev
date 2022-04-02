import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { NavbarList } from "../navbar-list";
import { CloseButton, ListContainer } from "../navbar.style";

export const CustomDrawer = ({ toggleDrawer, drawer, navbarData }) => {
   return (
      <div>
         <Drawer anchor={"top"} open={drawer} onClose={toggleDrawer(false)}>
            <CloseButton onClick={toggleDrawer(false)}>
               <CloseIcon />
            </CloseButton>
            <ListContainer>
               {navbarData.map((listData) => (
                  <NavbarList toggleDrawer={toggleDrawer} listData={listData} />
               ))}
            </ListContainer>
         </Drawer>
      </div>
   );
};
