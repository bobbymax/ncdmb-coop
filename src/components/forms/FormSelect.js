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

          {options.map((option, index) => {
            if (option.key)
              return (
                <option key={index} value={option.key}>
                  {option.value}
                </option>
              );
            else if (option.budget_head_id)
              return (
                <option key={index} value={option.budget_head_id}>
                  {option.name}
                </option>
              );
            else if (option.department_id)
              return (
                <option key={index} value={option.department_id}>
                  {option.name}
                </option>
              );
          })}
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
