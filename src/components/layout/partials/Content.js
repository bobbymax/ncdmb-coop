import React from "react";
import Toolbar from "./Toolbar";

const Content = ({ children, auth }) => {
  return (
    <div className="content" id="kt_content">
      <div className="container-xxl">
        <Toolbar auth={auth} />
        {children}
      </div>
    </div>
  );
};

export default Content;
