import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServicesData } from "./ServicesData";
import { CommentsData } from "./CommentsData";
import "./Services.css";
import "swiper/css";

const Services = () => {
  return (
    <div className="d-flex p-4">
      <div className="col-6">
        <h2 className="text-primary border-bottom pb-3 border-secondary">
          Xizmatlar
        </h2>
        <div className="d-flex flex-wrap mt-3">
          {ServicesData.map((item, id) => {
            return (
              <div className="col-6 p-2">
                <div
                  className="text-white bg-primary p-3 d-flex gap-2 justify-content-center align-items-center"
                  key={id}
                >
                  <span className="fs-1 align-items-center d-flex">
                    {item.icon}
                  </span>
                  <p className="m-0">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-6 px-4">
        <h2 className="border-bottom border-secondary pb-3 text-primary">
          Sharhlar
        </h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="shadow mt-4"
        >
          {CommentsData.map((item, id) => {
            return (
              <SwiperSlide key={id} style={{ cursor: "pointer" }}>
                <div className="px-5 py-4 text-center">
                  <p className="fw-bold">{item.name}</p>
                  <p
                    className="changed-scroll opacity-75 overflow-auto"
                    style={{ height: "90px" }}
                  >
                    {item.comment}
                  </p>
                  <p className="text-primary">{item.date}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
