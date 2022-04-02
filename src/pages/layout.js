import React from "react";
import { Outlet } from "react-router-dom";
import ThemeProvider from "utils/theme";
import Navbar from "./../components/navbar/navbar";

const Layout = () => {
   return (
      <ThemeProvider>
         <Navbar />
         {/* navbar */}
         <Outlet />
         {/* footer */}
      </ThemeProvider>
   );
};

export default Layout;
