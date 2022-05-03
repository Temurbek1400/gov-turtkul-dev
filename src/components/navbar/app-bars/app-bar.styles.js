import { alpha, styled as styledMUI } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { ListItem } from "@mui/material";
import Box from "@mui/material/Box";

export const BoxStyled = styledMUI(Box)(({theme}) => ({
   flexGrow: 1,
   "& .app-bar-item:hover": {
      backgroundColor: "#1976d2",
      color: "#fff"
   }
}))

export const AppBarItemText = styledMUI(ListItem)(({ theme }) => ({
  flexGrow: 1,
  display: { xs: "none", sm: "block" },
  color: theme.palette.primary.main,
  fontSize: "18px",
}));

export const Search = styledMUI("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styledMUI("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styledMUI(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
