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
        className={`btn btn-${variant} btn-block`}
        {...otherProps}
      >
        <>{children}</>
      </button>
    </div>
  );
};

export default ButtonField;
