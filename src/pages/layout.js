import Footer from "components/footer/footer";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../components/navbar/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
