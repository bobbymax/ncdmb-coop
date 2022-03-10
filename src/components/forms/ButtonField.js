import React from "react";

const ButtonField = ({
  children,
  type = "button",
  variant = "primary",
  ...otherProps
}) => {
  return (
    <div className="text-center">
      <button
        type={type}
        className={`btn btn-lg w-100 mb-5 btn-${variant}`}
        {...otherProps}
      >
        <span className="indicator-label">{children}</span>
      </button>
    </div>
  );
};

export default ButtonField;
