import React from "react";
import { useFormikContext } from "formik";

const ButtonField = ({ text, type = "button", variant = "primary" }) => {
  return (
    <div className="text-center">
      <button type={type} className={`btn btn-${variant} btn-block`}>
        {text}
      </button>
    </div>
  );
};

export default ButtonField;
