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
        <Grid item md={8}>
          <Outlet />
        </Grid>
        <Grid item md={4}>
          <LeftContent />
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplateLayout;
