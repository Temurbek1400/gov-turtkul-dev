import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { CustomBox, CustomListItem } from "./custom-drawer.styles";

export const CustomDrawerList = ({ toggleDrawer, listData }) => {
   return (
      <CustomBox onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
         <List>
            <ListItem>
               <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  {listData.head}
               </Typography>
            </ListItem>
            {listData.list.map((text) => (
               <CustomListItem button key={text}>
                  <ListItemText primary={text} />
               </CustomListItem>
            ))}
         </List>
      </CustomBox>
   );
};
