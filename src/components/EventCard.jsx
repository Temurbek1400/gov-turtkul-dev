import React from "react";
const EventCard = ({ item }) => {
  return (
    <div className="events-card bg-light rounded-3 overflow-hidden">
      <img src={item.img} alt="event-card-img" style={{ width: "100%" }} />
      <h5 className="p-3 text-primary">{item.text}</h5>
    </div>
  );
};

export default EventCard;
