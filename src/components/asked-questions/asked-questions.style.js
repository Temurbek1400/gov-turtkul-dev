import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.primary};
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  svg {
    color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 100%;
  }
`;
