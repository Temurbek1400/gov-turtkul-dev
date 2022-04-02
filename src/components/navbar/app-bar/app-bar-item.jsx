import Typography from "@mui/material/Typography";

export const AppBarItem = ({ data }) => {
   return (
      <Typography
         variant="h6"
         noWrap
         component="div"
         sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
         {data.head}
      </Typography>
   );
};
