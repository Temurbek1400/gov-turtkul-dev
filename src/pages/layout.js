import Footer from "components/footer/footer";
import React from "react";
import { Outlet } from "react-router-dom";
import ThemeProvider from "utils/theme";
import Navbar from "./../components/navbar/navbar";

const Layout = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
