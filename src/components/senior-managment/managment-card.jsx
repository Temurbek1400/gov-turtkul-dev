import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Right, Btns, ModalContent } from "./managment.style";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Managment = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
          {/* <Btns>
          <Button variant="contained">Tarjimai hol</Button>
        </Btns> */}
          <Button variant="contained" onClick={handleOpen}>
            Majburiyatlari
          </Button>
        </Right>
      </Wrapper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Managment;
