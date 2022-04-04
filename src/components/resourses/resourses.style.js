import styled from "styled-components";

export const SwiperWrapper = styled.div`
  padding: 0 15px;
`;

export const CardWrapper = styled.div`
  padding: 20px 0;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.secondary2};
  border-radius: 5px;
  overflow: hidden;
  transition: 0.3s;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 20px #909090;

  img {
    cursor: pointer;
    width: 40%;
  }

  p {
    color: ${({ theme }) => theme.primary};
    margin: 0;
  }
`;
