import React from "react";
import { ServicesData } from "./ServicesData";

const Services = () => {
  return (
    <div className="d-flex p-4">
      <div className="col-6">
        <h2 className="text-primary border-bottom pb-3">Xizmatlar</h2>
        <div className="d-flex flex-wrap">
          {ServicesData.map((item, id) => {
            return (
              <div className="col-6 p-2">
                <div
                  className="text-white bg-primary py-3 d-flex gap-2 justify-content-center align-items-center"
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
      <div className="col-6">
        <h2 className="border-bottom pb-3">Sharhlar</h2>
      </div>
    </div>
  );
};

export default Services;
