import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { CustomBox, CustomListItem } from "./custom-drawer.styles";
import { Link } from "react-router-dom";

export const CustomDrawerList = ({ toggleDrawer, listData }) => {
   return (
      <CustomBox onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
         <List>
            <ListItem>
               <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  <Link to="news">{listData.head}</Link>
               </Typography>
            </ListItem>
            {listData.list.map((text) => (
               <CustomListItem button key={text}>
                  <ListItemText primary={<Link to="news">{text}</Link>} />
               </CustomListItem>
            ))}
         </List>
      </CustomBox>
   );
};
