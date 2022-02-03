import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({
  title,
  type = "button",
  variant = "primary",
  disabled,
  ...otherProps
}) => {
  const { handleSubmit } = useFormikContext();

  return (
    <div className="text-center">
      <button
        type={type}
        className={`btn btn-${variant}`}
        disabled={disabled}
        onClick={handleSubmit}
        {...otherProps}
      >
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;
