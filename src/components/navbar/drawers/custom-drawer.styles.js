import styled from "styled-components";
import Box from "@mui/system/Box";
import ListItem from "@mui/material/ListItem";
import DrawerLib from "react-modern-drawer";

export const CustomBox = styled(Box)`
   max-width: 400px;
   padding: 0px;
`;
export const CustomListItem = styled(ListItem)`
   padding-top: 0px;
   padding-bottom: 0px;
   color: ${(props) => props.primary};
`;
export const Drawer = styled(DrawerLib)`
   height: "100%";
   overflow: "scroll";
   background-image: url("https://ssv.uz/assets/public/images/logo.svg");
`;
