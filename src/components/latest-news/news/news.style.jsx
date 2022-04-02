import styled from "styled-components";
import { ListItemButton } from "@mui/material";

export const Time = styled.p`
  margin: 0px;
  color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  font-size: 15px;
  svg {
    margin-right: 6px;
  }
`;
export const MainBody = styled.p`
  margin: 14px 0px 0px 0px;
  color: ${(props) => props.theme.textColor};
`;
export const Wrapper = styled(ListItemButton)`
  flex-direction: column;
  align-items: flex-start !important;
  cursor: pointer;
  padding: 10px 40px !important;
  width: 100%;
  color: ${(props) => props.theme.textColor};
  box-sizing: border-box;
`;
