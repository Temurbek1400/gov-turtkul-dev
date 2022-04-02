import styled from "styled-components";

export const Title = styled.h1`
   padding-bottom: 20px;
   color: ${({ theme }) => theme.primary};
   border-bottom: 1px solid #909090;
`;

export const Wrapper = styled.div`
   margin-top: 20px;
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   gap: 30px;

   @media (min-width: ${({ theme }) => theme.media.mobileS}) {
      gap: 20px;
      grid-template-columns: repeat(1, 1fr);
   }

   @media (min-width: ${({ theme }) => theme.media.mobileL}) {
      gap: 20px;
      grid-template-columns: repeat(2, 1fr);
   }

   @media (min-width: ${({ theme }) => theme.media.tablet}) {
      grid-template-columns: repeat(3, 1fr);
   }

   @media (min-width: ${({ theme }) => theme.media.laptop}) {
      grid-template-columns: repeat(4, 1fr);
   }
`;

export const CardWrapper = styled.div`
   background: ${({ theme }) => theme.secondary2};
   border-radius: 10px;
   overflow: hidden;
   transition: 0.3s;

   :hover {
      box-shadow: 0 0 40px #707070;
   }

   img {
      transition: 0.3s;
      cursor: pointer;
   }

   img:hover {
      transform: scale(1.07);
   }
`;

export const CardText = styled.div`
   color: ${({ theme }) => theme.primary};
   padding: 30px;
   @media (min-width: ${({ theme }) => theme.media.mobileS}) {
      padding: 20px;
   }
`;
