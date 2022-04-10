import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Right, Btns } from "./managment.style";

const Managment = ({ data }) => {
  return (
    <Wrapper>
      <img src={data.img} alt="person" />
      <Right>
        <p style={{ marginTop: 0 }}>{data.title}</p>
        <Link to="/">{data.name}</Link>
        <p>{data.phone}</p>
        <p>{data.email}</p>
        <p>{data.time}</p>
        <Btns>
          <Button variant="contained">Tarjimai hol</Button>
          <Button variant="contained">Majburiyatlari</Button>
        </Btns>
      </Right>
    </Wrapper>
  );
};

export default Managment;
