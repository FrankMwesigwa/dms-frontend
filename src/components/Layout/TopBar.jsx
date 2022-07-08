import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/Plain-logo.webp";
import { logOut } from "../../store/actions/authActions";

const TopBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const Logout = () => {
    dispatch(logOut());
  };

  return (
    <header id="page-topbar">
      <div class="navbar-header">
        <div class="d-flex">
          <div class="navbar-brand-box">
            <Link
              to="/"
              class="logo logo-dark"
            >
              <span class="logo-sm">
                <img src={logo} alt="inthing logo"/>
              </span>
              <span class="logo-lg">
                <img src={logo} alt="inthing logo"/>
              </span>
            </Link>
            <Link
              href="/" 
              class="logo logo-light"
            >
              <span class="logo-sm">
                <img src={logo} alt="inthing logo" height="80" />
              </span>
              <span class="logo-lg">
                <img src={logo} alt="inthing logo" height="100" />
              </span>
            </Link>
          </div>
          <button
            type="button"
            class="btn btn-sm px-3 font-size-16 header-item waves-effect"
            id="vertical-menu-btn"
          >
            <i class="fa fa-fw fa-bars"></i>
          </button>

          <div class="dropdown dropdown-mega d-none d-lg-block ms-2">
            <button
              type="button"
              class="btn header-item waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <span key="t-megamenu">Distributor Management System</span>
              <i class="mdi mdi-chevron-down"></i>
            </button>
          </div>
        </div>
        <div class="d-flex">
          <div class="dropdown">
            <Link
              type="button"
              class="btn header-item noti-icon waves-effect mt-3"
              to="/"
            >
              <i class="bx bx-home-circle"></i>
            </Link>
           
          </div>
          <div class="dropdown d-inline-block">
          <Link
              type="button"
              class="btn header-item noti-icon waves-effect mt-3"
              to="/"
            >
              <i class='bx bx-user'></i>
              <span class="d-none d-xl-inline-block ms-1" key="t-henry">
                {auth && auth.user.user.username}
              </span>
              <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </Link>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">
                <i class="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                <span key="t-profile">Profile</span>
              </a>
              <a class="dropdown-item" href="#">
                <i class="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                <span key="t-my-wallet">My Wallet</span>
              </a>
              <a class="dropdown-item d-block" href="#">
                <span class="badge bg-success float-end">11</span>
                <i class="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                <span key="t-settings">Settings</span>
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item text-danger"
                onClick={Logout}
              >
                <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                <span key="t-logout">Logout</span>
              </a>
            </div>
          </div>
          <div class="dropdown d-inline-block mt-3">
            <Link
              type="button"
              to='/login'
              class="btn header-item noti-icon right-bar-toggle waves-effect"
            >
              <i class="bx bx-log-out-circle"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
