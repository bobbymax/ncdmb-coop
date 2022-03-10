import React from "react";
import Toolbar from "./Toolbar";

const Content = ({ children, auth }) => {
  return (
    <div className="content bg-danger" id="kt_content">
      <div className="container-xxl">
        <Toolbar auth={auth} />
        {children}
      </div>
    </div>
  );
};

export default Content;
