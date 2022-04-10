import LeftContent from "components/left-content/left-content";
import Managment from "components/senior-managment/managment-card";
import { ManagmentData } from "components/senior-managment/managment-data";
import { Container } from "components/senior-managment/managment.style";
import {
  LeftWrapper,
  RigthWrapper,
} from "components/senior-managment/managment.style";
import { Title } from "components/senior-managment/managment.style";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SeniorManagment = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container>
      <LeftWrapper>
        {ManagmentData.map((item, id) => (
          <div data-aos="fade-up">
            <Managment data={item} key={id} />
          </div>
        ))}
      </LeftWrapper>

      <RigthWrapper>
        <Title>Hokimiyat haqida</Title>
        <LeftContent />
      </RigthWrapper>
    </Container>
  );
};

export default SeniorManagment;
