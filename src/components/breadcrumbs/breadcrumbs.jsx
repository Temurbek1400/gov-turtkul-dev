import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledBreadcrumb, Wrapper } from "./breadcrumbs.style";
import HomeIcon from "@mui/icons-material/Home";
import { MdOutlineLastPage } from "react-icons/md";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const pathes = pathnames.map((value, index) => {
    const last = index === pathnames.length - 1;
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    return last ? (
      <StyledBreadcrumb
        disabled
        color="primary"
        label={value}
        icon={<MdOutlineLastPage fontSize="small" />}
      />
    ) : (
      <StyledBreadcrumb component={Link} label={value} to={to} key={to} />
    );
  });
  return (
    <Wrapper>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={Link}
          to={"/"}
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        {pathes}
      </Breadcrumbs>
    </Wrapper>
  );
};

export default BreadCrumbs;
