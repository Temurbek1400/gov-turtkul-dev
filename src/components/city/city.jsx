import { CardText } from "components/events/events.style";
import { CardWrapper } from "components/events/events.style";
import { Wrapper } from "components/events/events.style";
import Title from "components/title";
import React, { useEffect } from "react";
import { CityData } from "./city-data";
import AOS from "aos";
import "aos/dist/aos.css";

const City = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div style={{ marginBottom: "30px" }}>
      <Title text="Shahar" />
      <div data-aos="fade-up">
        <Wrapper>
          {CityData.map((item, id) => {
            return (
              <CardWrapper key={id}>
                <img src={item.img} alt="event-card-img" />
                <CardText>{item.title}</CardText>
                <p>{item.desc}</p>
              </CardWrapper>
            );
          })}
        </Wrapper>
      </div>
    </div>
  );
};

export default City;
