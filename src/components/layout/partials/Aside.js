/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";

const Aside = () => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth.value.user);

  return (
    // <div className="deznav">
    //   <div className="deznav-scroll">
    //     <ul className="metismenu" id="menu">
    //       <li
    //         className={
    //           location.pathname && location.pathname === "/" ? "mm-active" : ""
    //         }
    //       >
    //         <NavLink to="/" className="ai-icon" aria-expanded="false">
    //           <i className="flaticon-381-networking" />
    //           <span className="nav-text">Dashboard</span>
    //         </NavLink>
    //       </li>

    //       <li
    //         className={
    //           location.pathname && location.pathname === "/applications"
    //             ? "mm-active"
    //             : ""
    //         }
    //       >
    //         <NavLink
    //           to="/applications"
    //           className="ai-icon"
    //           aria-expanded="false"
    //         >
    //           <i className="flaticon-381-app" />
    //           <span className="nav-text">Modules</span>
    //         </NavLink>
    //       </li>

    //       {auth && auth.administrator ? (
    //         <li
    //           className={
    //             location.pathname && location.pathname === "/settings"
    //               ? "mm-active"
    //               : ""
    //           }
    //         >
    //           <Link to="/settings" className="ai-icon" aria-expanded="false">
    //             <i className="flaticon-381-settings-2" />
    //             <span className="nav-text">Settings</span>
    //           </Link>
    //         </li>
    //       ) : null}

    //       {auth && auth.administrator ? (
    //         <li
    //           className={
    //             location.pathname && location.pathname === "/overview"
    //               ? "mm-active"
    //               : ""
    //           }
    //         >
    //           <Link to="/overview" className="ai-icon" aria-expanded="false">
    //             <i className="fa fa-eye" />
    //             <span className="nav-text">Overview</span>
    //           </Link>
    //         </li>
    //       ) : null}

    //       {auth && auth.administrator ? (
    //         <li
    //           className={
    //             location.pathname && location.pathname === "/configuration"
    //               ? "mm-active"
    //               : ""
    //           }
    //         >
    //           <Link
    //             to="/configuration"
    //             className="ai-icon"
    //             aria-expanded="false"
    //           >
    //             <i className="fa fa-building" />
    //             <span className="nav-text">Configuration</span>
    //           </Link>
    //         </li>
    //       ) : null}
    //     </ul>
    //   </div>
    // </div>
    <div
      id="kt_aside"
      className="aside aside-dark aside-hoverable"
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle"
    >
      <div className="aside-logo bg-light flex-column-auto" id="kt_aside_logo">
        <a href="#">
          <img
            alt="Logo"
            src={require("../../../assets/images/newLogo.png")}
            className="h-25px logo"
          />
        </a>

        <div
          id="kt_aside_toggle"
          className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
          data-kt-toggle="true"
          data-kt-toggle-state="active"
          data-kt-toggle-target="body"
          data-kt-toggle-name="aside-minimize"
        >
          <span className="svg-icon svg-icon-1 rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.5"
                d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                fill="black"
              />

              <path
                d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="aside-menu flex-column-fluid">
        <div
          className="hover-scroll-overlay-y my-5 my-lg-5"
          id="kt_aside_menu_wrapper"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
          data-kt-scroll-wrappers="#kt_aside_menu"
          data-kt-scroll-offset="0"
        >
          <div
            className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
            id="#kt_aside_menu"
            data-kt-menu="true"
            data-kt-menu-expand="false"
          >
            <NavLink
              to="/"
              data-kt-menu-trigger="click"
              className={
                location.pathname && location.pathname === "/"
                  ? "menu-item here"
                  : "menu-item"
              }
            >
              <span to="/" className="menu-link">
                <span className="menu-icon">
                  <span className="svg-icon svg-icon-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                        fill="black"
                      />
                      <path
                        d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                        fill="black"
                      />
                      <path
                        opacity="0.3"
                        d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </span>
                <span className="menu-title">Dashboard</span>
                <span className="menu-arrow"></span>
              </span>
            </NavLink>

            <NavLink
              to="/modules"
              data-kt-menu-trigger="click"
              className={
                location.pathname && location.pathname === "/modules"
                  ? "menu-item here"
                  : "menu-item"
              }
            >
              <span className="menu-link">
                <span className="menu-icon">
                  <span className="svg-icon svg-icon-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                        fill="black"
                      />
                      <path
                        d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                        fill="black"
                      />
                      <path
                        opacity="0.3"
                        d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                        fill="black"
                      />
                      <path
                        opacity="0.3"
                        d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </span>
                <span className="menu-title">Modules</span>
                <span className="menu-arrow"></span>
              </span>
            </NavLink>

            <NavLink
              to="/modules"
              data-kt-menu-trigger="click"
              className={
                location.pathname && location.pathname === "/settings"
                  ? "menu-item here"
                  : "menu-item"
              }
            >
              <span className="menu-link">
                <span className="menu-icon">
                  <span className="svg-icon svg-icon-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                        fill="black"
                      />
                      <path
                        d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                        fill="black"
                      />
                      <path
                        opacity="0.3"
                        d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </span>
                <span className="menu-title">Settings</span>
                <span className="menu-arrow"></span>
              </span>
            </NavLink>

            <NavLink
              to="/overview"
              data-kt-menu-trigger="click"
              className={
                location.pathname && location.pathname === "/overview"
                  ? "menu-item here"
                  : "menu-item"
              }
            >
              <span className="menu-link">
                <span className="menu-icon">
                  <span className="svg-icon svg-icon-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                        fill="black"
                      />
                      <path
                        d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                        fill="black"
                      />
                      <path
                        opacity="0.3"
                        d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </span>
                <span className="menu-title">Overview</span>
                <span className="menu-arrow"></span>
              </span>
            </NavLink>

            <NavLink
              to="/configuration"
              data-kt-menu-trigger="click"
              className={
                location.pathname && location.pathname === "/configuration"
                  ? "menu-item here"
                  : "menu-item"
              }
            >
              <span className="menu-link">
                <span className="menu-icon">
                  <span className="svg-icon svg-icon-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                        fill="black"
                      />
                      <path
                        d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                        fill="black"
                      />
                      <path
                        opacity="0.3"
                        d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </span>
                <span className="menu-title">Configuration</span>
                <span className="menu-arrow"></span>
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Menu Item */}
    </div>
  );
};

export default Aside;
