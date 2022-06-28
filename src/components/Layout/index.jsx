import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div id="layout-wrapper">
      <TopBar />
      <SideBar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
