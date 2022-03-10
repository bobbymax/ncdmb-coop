import React from "react";

const Toolbar = ({ auth }) => {
  return (
    <div>
      <div class="toolbar" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          class="container-fluid d-flex flex-stack"
        >
          <div
            data-kt-swapper="true"
            data-kt-swapper-mode="prepend"
            data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
            class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
          >
            <h1 className="d-flex text-dark fw-bolder fs-3 align-items-center my-1">
              Dashboard
            </h1>

            <span className="h-20px border-1 border-gray-200 border-start ms-3 mx-2 me-1"></span>

            {/* <h2 className="text-muted fs-7 fw-bold mt-2">
              Welcome - {auth && auth !== null && auth.name}
            </h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
