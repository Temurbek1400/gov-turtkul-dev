import { FormControlLabel } from "@mui/material";
import React from "react";
import { MUISwitch } from "./switch.style";

const Switch = () => {
  return <FormControlLabel control={<MUISwitch sx={{ m: 1 }} />} />;
};

export default Switch;
