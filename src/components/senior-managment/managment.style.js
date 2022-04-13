import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    flex-direction: column;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 100%;
  }
`;

export const RigthWrapper = styled.div`
  width: 25%;
  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletS}) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 0 20px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }
  border-bottom: 1px solid silver;

  @media (max-width: ${({ theme }) => theme.media.tabletS}) {
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
    }
  }
`;

export const Right = styled.div`
  @media (max-width: ${({ theme }) => theme.media.tabletS}) {
    text-align: center;
  }
`;
export const Btns = styled.div`
  display: flex;
  gap: 10px;
  button {
    background: ${({ theme }) => theme.primary} !important;
    text-transform: capitalize;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletS}) {
    justify-content: center;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
  width: 400px;
  background-color: silver;
  border: 2px solid #000;
  box-shadow: 0 0 10px #303030;
  padding: 20px;
`;
