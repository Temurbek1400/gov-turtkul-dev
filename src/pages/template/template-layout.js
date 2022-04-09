import { Grid } from "@mui/material";
import BreadCrumbs from "components/breadcrumbs/breadcrumbs";
import LeftContent from "components/left-content/left-content";
import React from "react";
import { Outlet } from "react-router-dom";

const TemplateLayout = () => {
  return (
    <div>
      <BreadCrumbs />
      <Grid container spacing={4}>
        <Grid item sm={7} md={8}>
          <Outlet />
        </Grid>
        <Grid item sm={5} md={4}>
          <LeftContent />
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplateLayout;
