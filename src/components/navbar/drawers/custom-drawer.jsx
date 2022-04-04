import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { CustomDrawerList } from "./custom-drawer-list";
import { CloseButton, ListContainer } from "../navbar.styles";

 const CustomDrawer = ({ toggleDrawer, drawer, navbarData }) => {
   return (
      <div>
         <Drawer
            anchor={"top"}
            open={drawer}
            onClose={toggleDrawer(false)}
         >
            <CloseButton onClick={toggleDrawer(false)}>
               <CloseIcon />
            </CloseButton>
            <ListContainer>
               {navbarData.map((listData) => (
                  <CustomDrawerList toggleDrawer={toggleDrawer} listData={listData} />
               ))}
            </ListContainer>
         </Drawer>
      </div>
   );
};
export default CustomDrawer




