/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { disembark } from "../../../features/auth/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.value.user);

  const logout = () => {
    dispatch(disembark());
    navigate("/");
  };

  return (
    <div id="kt_header" className="header align-items-stretch">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        <div
          className="d-flex align-items-center d-lg-none ms-n2 me-2 flex-grow-1"
          title="Show aside menu"
        >
          <div
            className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
            id="kt_aside_mobile_toggle"
          >
            <span className="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <Link to="#" className="d-lg-none">
            <img
              alt="Logo"
              src={require("../../../assets/images/newLogoAlone.png")}
              className="h-30px"
            />
          </Link>
        </div>

        <div className="d-flex align-items-center">
          <div className="d-flex align-items-stretch" id="kt_header_nav">
            <div
              className="header-menu align-items-stretch"
              data-kt-drawer="true"
              data-kt-drawer-name="header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="{default:'200px', '300px': '250px'}"
              data-kt-drawer-direction="end"
              data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
            >
              <div className="d-flex align-items-stretch" id="kt_header_nav">
                <div className="d-flex align-items-stretch flex-shrink-0 justify-content-end">
                  <div
                    className="d-flex align-items-center ms-1 ms-lg-3"
                    id="kt_header_user_menu_toggle"
                  >
                    <div
                      className="cursor-pointer symbol symbol-30px symbol-md-40px show menu-dropdown"
                      data-kt-menu-trigger="click"
                      data-kt-menu-attach="parent"
                      data-kt-menu-placement="bottom-start"
                    >
                      <img
                        src={require("../../../assets/media/avatars/300-1.jpg")}
                        alt="user"
                      />
                    </div>

                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                      data-kt-menu="true"
                    >
                      <div className="menu-item px-3">
                        <div className="menu-content d-flex align-items-center px-3">
                          <div className="symbol symbol-50px me-5">
                            <img
                              alt="Logo"
                              src={require("../../../assets/media/avatars/300-1.jpg")}
                            />
                          </div>

                          <div className="d-flex flex-column">
                            <div className="fw-bolder d-flex align-items-center fs-5">
                              {auth && auth.name}
                            </div>

                            <span className="fw-bold text-muted text-hover-primary fs-7">
                              {auth && auth.email}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="separator my-2"></div>

                      <div className="menu-item px-5">
                        <Link to="/user/profile" className="menu-link px-5">
                          My Profile
                        </Link>
                      </div>

                      <div className="separator my-2"></div>

                      <div className="menu-item px-5">
                        <Link
                          className="menu-link px-5"
                          to="#"
                          onClick={logout}
                        >
                          Sign Out
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center d-lg-none ms-2 me-n3"
                    title="Show header menu"
                  >
                    <div
                      className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                      id="kt_header_menu_mobile_toggle"
                    >
                      <span className="svg-icon svg-icon-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z"
                            fill="black"
                          />
                          <path
                            opacity="0.3"
                            d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
