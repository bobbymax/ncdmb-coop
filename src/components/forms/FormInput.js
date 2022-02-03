import React from "react";
import { useFormikContext } from "formik";

const FormInput = ({
  label = "",
  name,
  type = "text",
  placeholder = "",
  required = false,
  multiline = 0,
  error = false,
  additionalClasses = "",
  ...otherProps
}) => {
  const { errors, values, setFieldValue } = useFormikContext();

  return (
    <div className={`form-group ${errors[name] ? "input-danger" : ""}`}>
      {label !== "" && (
        <label className="mb-1">
          <strong>{label}</strong>
        </label>
      )}

      {multiline === 0 ? (
        <input
          type={type}
          className={`form-control ${additionalClasses}`}
          placeholder={placeholder}
          value={values[name]}
          onChange={({ target: { value: text } }) => setFieldValue(name, text)}
          required={required}
          {...otherProps}
        />
      ) : (
        <textarea
          className="form-control"
          row={multiline}
          required={required}
          value={values[name]}
          onChange={({ target: { value: text } }) => setFieldValue(name, text)}
          placeholder={placeholder}
          {...otherProps}
        ></textarea>
      )}

      {errors ? (
        <span style={{ fontSize: 12 }} className="text-danger">
          {errors[name]}
        </span>
      ) : null}
    </div>
  );
};

export default FormInput;
