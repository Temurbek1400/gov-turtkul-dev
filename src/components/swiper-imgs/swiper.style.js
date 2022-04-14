import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.primary};
`;

export const Right = styled.div`
  width: 30%;
  margin-top: 20px;
`;

export const ItemWrapper = styled.div`
  padding: 12px 0;
  border-top: 1px solid silver;
  width: 100%;
  background-color: ${({ active, theme }) => active && theme.secondary};
  a {
    :hover {
      color: ${({ theme }) => theme.primary};
    }
    opacity: 0.7;
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;

  p {
    line-height: 150%;
    margin-top: 40px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
`;
