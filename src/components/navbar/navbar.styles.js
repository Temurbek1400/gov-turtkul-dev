import Box from "@mui/system/Box";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const ListContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
`;
export const CloseButton = styled(Button)`
  width: 0;
  color: ${(props) => props.theme.primary};
`;

export const Wrapper = styled.div`
  margin: 0 -30px;
  @media (max-width: 425px) {
    margin: 0 -20px;
  }
`;
