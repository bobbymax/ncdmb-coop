/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";

const Aside = () => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth.value.user);

  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li
            className={
              location.pathname && location.pathname === "/" ? "mm-active" : ""
            }
          >
            <NavLink to="/" className="ai-icon" aria-expanded="false">
              <i className="flaticon-381-networking" />
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </li>

          <li
            className={
              location.pathname && location.pathname === "/applications"
                ? "mm-active"
                : ""
            }
          >
            <NavLink
              to="/applications"
              className="ai-icon"
              aria-expanded="false"
            >
              <i className="flaticon-381-app" />
              <span className="nav-text">Modules</span>
            </NavLink>
          </li>

          {auth && auth.administrator ? (
            <li
              className={
                location.pathname && location.pathname === "/settings"
                  ? "mm-active"
                  : ""
              }
            >
              <Link to="/settings" className="ai-icon" aria-expanded="false">
                <i className="flaticon-381-settings-2" />
                <span className="nav-text">Settings</span>
              </Link>
            </li>
          ) : null}

          {auth && auth.administrator ? (
            <li
              className={
                location.pathname && location.pathname === "/overview"
                  ? "mm-active"
                  : ""
              }
            >
              <Link to="/overview" className="ai-icon" aria-expanded="false">
                <i className="fa fa-eye" />
                <span className="nav-text">Overview</span>
              </Link>
            </li>
          ) : null}

          {auth && auth.administrator ? (
            <li
              className={
                location.pathname && location.pathname === "/configuration"
                  ? "mm-active"
                  : ""
              }
            >
              <Link
                to="/configuration"
                className="ai-icon"
                aria-expanded="false"
              >
                <i className="fa fa-building" />
                <span className="nav-text">Configuration</span>
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
