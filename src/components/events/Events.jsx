import Title from "components/title";
import React from "react";
import { EventsData } from "./events-card-data";
import { Wrapper, CardText, CardWrapper } from "./events.style";

const Events = () => {
  return (
    <>
      <Title text="Voqealar" />
      <Wrapper>
        {EventsData.map((item, id) => {
          return (
            <CardWrapper key={id}>
              <img src={item.img} alt="event-card-img" />
              <CardText>{item.text}</CardText>
            </CardWrapper>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Events;
