import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const AppBarItems = ({ navbarData }) => {
  return navbarData.map((item) => (
    <Button component={Link} to={item.link} sx={{ marginRight: 1.5 }}>
      {item.head}
    </Button>
  ));
};

export default AppBarItems;
