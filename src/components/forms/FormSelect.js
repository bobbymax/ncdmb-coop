import React from "react";
import { useFormikContext } from "formik";

const FormSelect = ({
  label = "",
  options,
  name,
  defaultText = "Choose Option",
  defaultInputValue = 0,
  arrinput = false,
}) => {
  const { errors, values, setFieldValue } = useFormikContext();

  return (
    <>
      <div className={`form-group ${errors[name] ? "input-danger" : ""}`}>
        {label !== "" && (
          <label className="mb-1">
            <strong>{label}</strong>
          </label>
        )}

        <select
          className={arrinput ? `multi-select` : `form-control default-select`}
          value={values[name]}
          onChange={({ target: { value: text } }) => setFieldValue(name, text)}
          multiple={arrinput ? "multiple" : ""}
        >
          <option value={defaultInputValue}>{defaultText}</option>

          {options.map((option, index) => (
            <option key={index} value={option.key}>
              {option.value}
            </option>
          ))}
        </select>
        {errors ? (
          <span style={{ fontSize: 12 }} className="text-danger">
            {errors[name]}
          </span>
        ) : null}
      </div>
    </>
  );
};

export default FormSelect;
