import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const auth = useSelector((state) => state.auth);

  console.log("User Role =====>", auth);

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
                {auth && auth.user.user.role === "admin" && (
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
                      <Link to="/admin/dist/orders" class="waves-effect">
                        <i class="bx bx-store-alt"></i>
                        <span key="t-dashboards">Distributor Orders</span>
                      </Link>
                    </li>
                    <li class="mm-acti">
                      <Link to="/admin/dist/sales" class="waves-effect">
                        <i class="bx bx-store-alt"></i>
                        <span key="t-dashboards">Agregator Sales</span>
                      </Link>
                    </li>
                    <li class="mm-acti">
                      <Link to="/orders/agents" class="waves-effect">
                        <i class="bx bx-building-house"></i>
                        <span key="t-dashboards">Agents Orders</span>
                      </Link>
                    </li>
                  </ul>
                )}

                {auth && auth.user.user.role === "distributor" && (
                  <ul class="metismenu list-unstyled mm-show" id="side-menu">
                    <li class="menu-title" key="t-menu">
                      Distributor Menu
                    </li>
                    <li class="mm-active">
                      <Link to="/" class="waves-effect">
                        <i class="bx bx-home-circle"></i>
                        <span key="t-dashboards">Dashboard</span>
                      </Link>
                    </li>
                    <li class="mm-acti">
                      <Link to="/dist/place/order" class="waves-effect">
                        <i class="bx bx-store-alt"></i>
                        <span key="t-dashboards">Place Order</span>
                      </Link>
                    </li>
                    <li class="mm-acti">
                      <Link to="/dist/products" class="waves-effect">
                        <i class="bx bx-store-alt"></i>
                        <span key="t-dashboards">Distributor Products</span>
                      </Link>
                    </li>
                    <li class="mm-acti">
                      <Link to="/dist/orders" class="waves-effect">
                        <i class="bx bx-building-house"></i>
                        <span key="t-dashboards">Distributor Orders</span>
                      </Link>
                    </li>
                    <li class="menu-title" key="t-menu">
                      Reports
                    </li>
                    <li class="mm-acti">
                      <Link to="/reports" class="waves-effect">
                        <i class="bx bx-aperture"></i>
                        <span key="t-dashboards">Purchase Reports</span>
                      </Link>
                      <Link to="/dist/orders" class="waves-effect">
                        <i class="bx bx-aperture"></i>
                        <span key="t-dashboards">Inventory Reports</span>
                      </Link>
                      <Link to="/reports" class="waves-effect">
                        <i class="bx bx-aperture"></i>
                        <span key="t-dashboards">Sales Reports</span>
                      </Link>
                    </li>
                  </ul>
                )}

                {auth && auth.user.user.role === "agent" && (
                  <ul class="metismenu list-unstyled mm-show" id="side-menu">
                    <li class="menu-title" key="t-menu">
                      Agent Menu
                    </li>
                    <li class="mm-active">
                      <Link to="/" class="waves-effect">
                        <i class="bx bx-home-circle"></i>
                        <span key="t-dashboards">Dashboard</span>
                      </Link>
                    </li>
                    <li class="mm-acti">
                      <Link to="/orders/agents" class="waves-effect">
                        <i class="bx bx-store-alt"></i>
                        <span key="t-dashboards">Distributor Products</span>
                      </Link>
                    </li>
                    <li class="mm-acti">
                      <Link to="/orders/agents" class="waves-effect">
                        <i class="bx bx-store-alt"></i>
                        <span key="t-dashboards">Place an Order</span>
                      </Link>
                    </li>
                    <li class="mm-acti">
                      <Link to="/orders/agents" class="waves-effect">
                        <i class="bx bx-building-house"></i>
                        <span key="t-dashboards">Record Sales</span>
                      </Link>
                    </li>
                    <li class="menu-title" key="t-menu">
                      Reports
                    </li>
                    <li class="mm-acti">
                      <Link to="/agent/purchases" class="waves-effect">
                        <i class="bx bx-aperture"></i>
                        <span key="t-dashboards">Purchase Reports</span>
                      </Link>
                      <Link to="/reports" class="waves-effect">
                        <i class="bx bx-aperture"></i>
                        <span key="t-dashboards">Inventory Reports</span>
                      </Link>
                      <Link to="/reports" class="waves-effect">
                        <i class="bx bx-aperture"></i>
                        <span key="t-dashboards">Sales Reports</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
