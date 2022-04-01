import React from "react";
import { Outlet } from "react-router-dom";
import ThemeProvider from "utils/theme";

const Layout = () => {
  return (
    <ThemeProvider>
      {/* navbar */}
      <Outlet />
      {/* footer */}
    </ThemeProvider>
  );
};

export default Layout;
