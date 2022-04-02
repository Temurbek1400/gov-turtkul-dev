import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 40px;
`;
export const Service = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  border-bottom: 1px solid #909090;
  padding-bottom: 20px;
`;
export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
  gap: 15px;
`;

export const ServiceCard = styled.div`
  padding: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.primary};

  svg {
    font-size: 50px;
  }
`;

export const CommentsWrapper = styled.div`
  width: 50%;
  padding: 0 30px;
`;

export const SwiperItem = styled.div`
  padding: 40px 50px;
  text-align: center;
`;

export const Comment = styled.div`
  margin: 15px 0;
  opacity: 0.7;
  overflow: auto;
  height: 110px;
  line-height: 150%;

  ::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgb(146, 146, 255);
  }

  ::-webkit-scrollbar-thumb {
    background: blue;
  }
`;
