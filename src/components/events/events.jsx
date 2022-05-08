import { BASE_URL } from "api/config";
import axios from "axios";
import Title from "components/title";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "store/reducer-and-action/events/eventsSlice";
import { Wrapper, CardText, CardWrapper } from "./events.style";

const Events = ({ events }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  return (
    <>
      <Title text={data.title} />
      <Wrapper>
        {data.map((item) => {
          return (
            <CardWrapper key={data.id}>
              <img src={BASE_URL + item.imagesown} alt="event-card-img" />
              <CardText>{item.body}</CardText>
            </CardWrapper>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Events;
