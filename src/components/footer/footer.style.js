import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px -30px 0;
  background-color: ${({ theme }) => theme.primary};
  padding: 30px 30px 50px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 32%;
  color: #fff;
`;

export const ImgWrapper = styled.div`
  width: 20%;

  img {
    width: 100%;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  p {
    opacity: 0.8;
  }
`;

export const Right = styled.div`
  width: 30%;
  color: #fff;
  line-height: 150%;
`;
