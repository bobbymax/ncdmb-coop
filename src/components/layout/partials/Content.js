import React from "react";

const Content = ({ children }) => {
  return (
    <div
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      {children}
    </div>
  );
};

export default Content;
