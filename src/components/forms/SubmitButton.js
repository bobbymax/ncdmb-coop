import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, type = "button", variant = "primary" }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <div className="text-center">
      <button
        type={type}
        className={`btn btn-${variant} btn-block`}
        onClick={handleSubmit}
      >
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;
