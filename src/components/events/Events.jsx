import React from "react";
import EventCard from "./event-card";
import { EventsData } from "./events-card-data";
import { Title, Wrapper } from "./events.style";

const Events = () => {
  return (
    <div style={{ padding: "0 30px" }}>
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
