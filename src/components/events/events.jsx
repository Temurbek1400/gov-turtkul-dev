import Title from "components/title";
import React from "react";
import { Wrapper, CardText, CardWrapper } from "./events.style";

const Events = ({ events }) => {
  return (
    <>
      <Title text={events.title} />
      <Wrapper>
        {events.items.map((item, id) => {
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
