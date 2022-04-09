import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CustomBox, CustomListItem } from "./custom-drawer.styles";

export const CustomDrawerList = ({ toggleDrawer, listData }) => {
  return (
    <CustomBox onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem>
          <Typography
            sx={{ fontWeight: "bold", textDecoration: "none" }}
            variant="h6"
          >
            {listData.head}
          </Typography>
        </ListItem>
        {listData.list.map((text) => (
          <Link to={`${listData.link}/${text.split(" ").join("+")}`}>
            <CustomListItem button key={text}>
              <ListItemText primary={text} />
            </CustomListItem>
          </Link>
        ))}
      </List>
    </CustomBox>
  );
};
