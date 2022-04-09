import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";

const AppBarItems = ({ navbarData }) => {
   const matches = useMediaQuery("(max-width:1100px)");

   return navbarData.map((item, index) =>
      matches ? (
         index <= 5 && <Button sx={{ marginRight: 1.5 }}>{item.head}</Button>
      ) : (
         <Button sx={{ marginRight: 1.5 }}>{item.head}</Button>
      )
   );
};

export default AppBarItems;
