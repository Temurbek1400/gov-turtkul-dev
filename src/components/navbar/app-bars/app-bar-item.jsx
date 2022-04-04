import Typography from "@mui/material/Typography";

const AppBarItem = ({ data }) => {
   return (
      <Typography
         variant="h6"
         noWrap
         component="div"
         sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, color: "#fff", fontSize: "18px"}}
      >
         {data.head}
      </Typography>
   );
};

export default AppBarItem;
