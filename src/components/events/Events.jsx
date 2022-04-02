import React from "react";
import EventCard from "./EventCard";
import { EventsData } from "./EventsCardData";
import { Title, Wrapper } from "./Events.style";

const Events = () => {
  return (
    <div className="p-4">
      <Title>Voqealar</Title>
      <Wrapper>
        {EventsData.map((item, id) => {
          return <EventCard item={item} key={id} />;
        })}
      </Wrapper>
    </div>
  );
};

export default Events;
