import React from "react";
import { useFormikContext } from "formik";

const CustomCheckbox = ({ label, name }) => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div class="form-check form-switch">
      <input
        className="form-check-input"
        value={values[name]}
        onChange={({ target: { value } }) => setFieldValue(name, value)}
        role="switch"
        id="flexSwitchCheckChecked"
        checked
      />

      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
