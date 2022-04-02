import Paper from "@mui/material/Paper";
import styled from "styled-components";

export const Title = styled.h2`
  color: ${(props) => props.theme.primary};
  font-size: 30px;
  margin: 16px;
`;

export const CustomPaper = styled(Paper)`
  margin-top: 16px;
  padding: 30px 40px;
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
`;
