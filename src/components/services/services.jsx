import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServicesData } from "./services-data";
import { CommentsData } from "./comments-data";
import "swiper/css";
import {
  Comment,
  CommentsWrapper,
  Service,
  ServiceCard,
  ServiceWrapper,
  SwiperItem,
  Wrapper,
} from "./services.style";
import Title from "components/title";

const Services = () => {
  return (
    <Wrapper>
      <Service>
        <Title text="Xizmatlar" />
        <ServiceWrapper>
          {ServicesData.map((item, id) => {
            return (
              <ServiceCard key={id}>
                {item.icon}
                <p>{item.text}</p>
              </ServiceCard>
            );
          })}
        </ServiceWrapper>
      </Service>
      <CommentsWrapper>
        <Title>Sharhlar</Title>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          style={{ boxShadow: "0 0 20px #606060", marginTop: "20px" }}
        >
          {CommentsData.map((item, id) => {
            return (
              <SwiperSlide key={id} style={{ cursor: "pointer" }}>
                <SwiperItem>
                  <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  <Comment>{item.comment}</Comment>
                  <p style={{ color: "blue" }}>{item.date}</p>
                </SwiperItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CommentsWrapper>
    </Wrapper>
  );
};

export default Services;
