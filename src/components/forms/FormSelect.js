import React from "react";
import { useFormikContext } from "formik";

const FormSelect = ({
  label = "",
  options,
  name,
  defaultText = "Choose Option",
  onChange = () => {},
  defaultInputValue = 0,
  arrinput = false,
  ...otherProps
}) => {
  const { errors, values, setFieldValue, setErrors } = useFormikContext();

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
          onChange={(e) => {
            setFieldValue(name, e.target.value);

            // onChange(e);
          }}
          multiple={arrinput ? "multiple" : ""}
          {...otherProps}
        >
          <option value={defaultInputValue}>{defaultText}</option>

          {options.map((option, index) => {
            if (option.key)
              return (
                <option key={index} value={option.key}>
                  {option.value}
                </option>
              );
            if (option.budget_head_id)
              return (
                <option key={index} value={option.budget_head_id}>
                  {option.name}
                </option>
              );
            if (option.sub_budget_head_id)
              return (
                <option key={index} value={option.sub_budget_head_id}>
                  {option.subBudgetHead.name}
                </option>
              );
            if (option.id)
              return (
                <option key={index} value={option.id}>
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
