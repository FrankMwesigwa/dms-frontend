import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem.js";
import menudata from "./menuData.js";

const SideMenu = () => {
  const [inactive, setInactive] = useState(false);
  return (
    <div class="simplebar-wrapper" style={{ margin: "0px" }}>
      <div class="simplebar-height-auto-observer-wrapper">
        <div class="simplebar-height-auto-observer"></div>
      </div>
      <div class="simplebar-mask">
        <div
          class="simplebar-offset"
          style={{ right: "-16.6667px", bottom: "0px" }}
        >
          <div
            class="simplebar-content-wrapper"
            style={{ height: "100%", overflow: "hidden scroll" }}
          >
            <div class="simplebar-content">
              <div id="sidebar-menu" class="mm-active">
                <ul class="metismenu list-unstyled mm-show" id="side-menu">
                  <li class="menu-title" key="t-menu">
                    Main Menu
                  </li>
                  <li class="mm-active">
                    <Link to="/" class="waves-effect">
                      <i class="bx bx-home-circle"></i>
                      <span key="t-dashboards">Dashboard</span>
                    </Link>
                  </li>
                  <li class="mm-acti">
                    <Link to="/products" class="waves-effect">
                      <i class="bx bx-store-alt"></i>
                      <span key="t-dashboards">Products</span>
                    </Link>
                  </li>
                  <li class="mm-acti">
                    <Link to="/distributors" class="waves-effect">
                      <i class="bx bx-building-house"></i>
                      <span key="t-dashboards">Distributors</span>
                    </Link>
                  </li>
                  <li class="mm-acti">
                    <Link to="/agents" class="waves-effect">
                      <i class="bx bx-street-view"></i>
                      <span key="t-dashboards">Agents</span>
                    </Link>
                  </li>
                  <li class="mm-acti">
                    <Link to="/reports" class="waves-effect">
                      <i class="bx bx-aperture"></i>
                      <span key="t-dashboards">Reports</span>
                    </Link>
                  </li>
                  <li class="mm-acti">
                    <Link to="/admin/users" class="waves-effect">
                      <i class="bx bx-building-house"></i>
                      <span key="t-dashboards">Admin Users</span>
                    </Link>
                  </li>
                  <li class="menu-title" key="t-menu">
                    Orders
                  </li>
                  <li class="mm-acti">
                    <Link to="/orders/distributors" class="waves-effect">
                      <i class="bx bx-store-alt"></i>
                      <span key="t-dashboards">Distributor Orders</span>
                    </Link>
                  </li>
                  <li class="mm-acti">
                    <Link to="/orders/agents" class="waves-effect">
                      <i class="bx bx-building-house"></i>
                      <span key="t-dashboards">Agents Orders</span>
                    </Link>
                  </li>
                  {/* <li class="menu-title" key="t-menu">
                    System Settings
                  </li> */}
                  
                  {/* <li class="menu-title" key="t-apps">
                    System Admin
                  </li>
                  {menudata.map((item, index) => (
                    <MenuItem item={item} key={index} />
                  ))} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
