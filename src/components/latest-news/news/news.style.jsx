import styled from "styled-components";
import ListItemButton from "@mui/material/ListItemButton";
import Paper from "@mui/material/Paper";

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

export const CustomPaper = styled(Paper)`
  margin-top: 16px;
  padding: 30px 0px;
  width: 100%;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  div:nth-child(2n + 1) {
    padding-right: 50px;
    border-right: 1px solid #0000005f;
  }
  div:nth-child(2n) {
    padding-left: 50px;
  }
  @media (max-width: ${(props) => props.theme.media.mobileL}) {
    grid-template-columns: 1fr;
    div:nth-child(2n + 1) {
      border-right: none;
    }
  }
`;
