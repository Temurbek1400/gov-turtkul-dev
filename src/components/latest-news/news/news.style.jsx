import styled from "styled-components";

export const Time = styled.p`
  color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  font-size: 15px;
  svg {
    margin-right: 6px;
  }
`;
export const MainBody = styled.p`
  margin: 10px 0px;
  color: ${(props) => props.theme.textColor};
`;
export const Wrapper = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textColor};
  box-sizing: border-box;
`;
