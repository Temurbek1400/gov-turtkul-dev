import React from "react";
import styled from "styled-components";

export const Text = styled.h1`
  color: ${({ theme }) => theme.primary};
  border-bottom: 1px solid #909090;
  padding-bottom: 20px;
`;

const Title = ({ text }) => {
  return <Text>{text}</Text>;
};

export default Title;
