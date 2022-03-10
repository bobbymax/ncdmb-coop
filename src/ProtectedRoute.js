/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Aside from "./components/layout/partials/Aside";
import Content from "./components/layout/partials/Content";
// import Footer from "./components/layout/partials/Footer";
import Header from "./components/layout/partials/Header";
// import Navigation from "./components/layout/partials/Navigation";
import { fetchSiteConfig } from "./features/config/configSlice";
import { collection } from "./services/utils/controllers";

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.value.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) {
      try {
        collection("settings")
          .then((res) => {
            dispatch(fetchSiteConfig(res.data));
          })
          .catch();
      } catch (error) {
        console.log(error);
      }
    }
  }, [auth]);

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <Aside />

        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />

          <Content auth={auth}>
            {auth ? children : <Navigate to="/login" />}
          </Content>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoute;
