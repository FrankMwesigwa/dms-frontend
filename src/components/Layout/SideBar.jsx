import React from "react";
import SideMenu from "./Menu/SideMenu";

const SideBar = () => {
  return (
    <div class="vertical-menu">
      <div data-simplebar="init" class="h-100">
        <SideMenu />
      </div>
    </div>
  );
};

export default SideBar;
