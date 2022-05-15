import React from "react";
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
import styled from "styled-components";
import logo from "assets/resoursesImgs/logo.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
`;

const FirstLoading = () => {
  return (
    <Wrapper>
      <img src={logo} alt="" />
      <Hypnosis width="350px" height="350px"></Hypnosis>
    </Wrapper>
  );
};

export default FirstLoading;
