import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Right } from "./managment.style";
import Button from "@mui/material/Button";
import ResponsibilityModal from "./responsibilty-modal";

const Managment = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Wrapper>
        <img src={data.img} alt="person" />
        <Right>
          <p style={{ marginTop: 0 }}>{data.title}</p>
          <Link to="/">{data.name}</Link>
          <p>{data.phone}</p>
          <p>{data.email}</p>
          <p>{data.time}</p>
          <Button variant="contained" onClick={handleOpen}>
            Majburiyatlari
          </Button>
        </Right>
      </Wrapper>

      <ResponsibilityModal
        body={data.responsibilities}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default Managment;
