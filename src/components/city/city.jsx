import { CardText } from "components/events/events.style";
import { CardWrapper } from "components/events/events.style";
import { Wrapper } from "components/events/events.style";
import Title from "components/title";
import React from "react";
import { CityData } from "./city-data";

const City = () => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Title text="Shahar" />
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
  );
};

export default City;
