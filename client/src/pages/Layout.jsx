import React from "react";
import {Outlet} from "react-router-dom";
import TransparentNavbar from "../components/TransparentNavbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div style={{"backgroundColor": "#66B2B2"}}>
      <TransparentNavbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;