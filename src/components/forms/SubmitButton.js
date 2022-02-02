import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({
  title,
  type = "button",
  variant = "primary",
  ...otherProps
}) => {
  const { handleSubmit } = useFormikContext();

  return (
    <div className="text-center">
      <button
        type={type}
        className={`btn btn-${variant}`}
        onClick={handleSubmit}
        {...otherProps}
      >
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;
