import React from "react";
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
import styled from "styled-components";
import logo from "assets/resoursesImgs/logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  div:nth-child(2) {
    width: 270px;
    height: 270px;
  }

  div:nth-child(3) {
    display: none !important;
  }

  img {
    width: 200px;
    height: 200px;
    position: absolute;
  }

  @media (max-width: 576px) {
    div:nth-child(2) {
      width: 150px;
      height: 150px;
    }

    img {
      width: 100px;
      height: 100px;
      position: absolute;
    }
  }
`;

const FirstLoading = () => {
  let num = 350;
  window.innerWidth > 576 ? (num = 350) : (num = 200);

  return (
    <Wrapper>
      <img src={logo} alt="" />
      <Hypnosis width={`${num}px`} height={`${num}px`} />
    </Wrapper>
  );
};

export default FirstLoading;
