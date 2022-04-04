import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/">fsdfs</Link>
      <Link to="/home">fsdfs</Link>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
