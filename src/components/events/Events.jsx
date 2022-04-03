import React from "react";
import { EventsData } from "./events-card-data";
import { Title, Wrapper, CardText, CardWrapper } from "./events.style";

const Events = () => {
  return (
    <>
      <Title>Voqealar</Title>
      <Wrapper>
        {EventsData.map((item, id) => {
          return (
            <CardWrapper key={id}>
              <img
                src={item.img}
                alt="event-card-img"
                style={{ width: "100%" }}
              />
              <CardText>{item.text}</CardText>
            </CardWrapper>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Events;
