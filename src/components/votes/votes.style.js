import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px 0 70px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const VoteCard = styled.div`
  padding: 30px;
  box-shadow: 0 0 25px ${({ theme }) => theme.secondary};
  position: relative;
`;

export const VoteBody = styled.div`
  margin-top: 20px;
  opacity: 0.7;
  overflow: auto;
  height: 150px;
  line-height: 150%;
`;

export const IconsWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: -50px;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Like = styled.div`
  display: flex;
  gap: 40px;
`;
export const Vote = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 25px;
`;
// export const Wrapper = styled.div``
// export const Wrapper = styled.div``
// export const Wrapper = styled.div``
