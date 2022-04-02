import React from "react";
import { CardText, CardWrapper } from "./Events.style";
const EventCard = ({ item }) => {
  return (
    <CardWrapper>
      <img src={item.img} alt="event-card-img" style={{ width: "100%" }} />
      <CardText>{item.text}</CardText>
    </CardWrapper>
  );
};

export default EventCard;
