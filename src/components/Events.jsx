import React from "react";
import EventCard from "./EventCard";
import { EventsData } from "./events/EventsCardData";
import "./events/Events.css";

const Events = () => {
  return (
    <div>
      <div className="p-4">
        <h1 className="color-primary border-bottom pb-3  border-2">Voqealar</h1>
        <div className="row ">
          {EventsData.map((item, id) => {
            return (
              <div className="col-3 p-3" key={id}>
                <EventCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
