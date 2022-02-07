import React from "react";

const CustomSelect = ({
  label = "",
  options,
  value = "",
  onChange = undefined,
  defaultText = "Choose Option",
  defaultInputValue = 0,
  error = false,
  errorMessage = null,
  arrinput = false,
}) => {
  return (
    <>
      <div className={`form-group ${error ? "input-danger" : ""}`}>
        {label !== "" && (
          <label className="mb-1">
            <strong>{label}</strong>
          </label>
        )}
        <select
          className={arrinput ? `multi-select` : `form-control default-select`}
          value={value}
          onChange={onChange}
          multiple={arrinput ? "multiple" : ""}
        >
          <option value={defaultInputValue}>{defaultText}</option>
          {options.map((option, index) => {
            // console.log(option.budgetHead.name);

            if (option.key) {
              return (
                <option key={index} value={option.key}>
                  {option.label}
                </option>
              );
            }

            if (option.name) {
              return (
                <option key={index} value={option.id}>
                  {option.name}
                </option>
              );
            }

            if (option.id) {
              console.log("Budget head id", option.id);

              return (
                <option key={index} value={option.id}>
                  {option.budgetHead.name}
                </option>
              );
            }
          })}
        </select>
        {errorMessage ? (
          <span style={{ fontSize: 12 }} className="text-danger">
            {errorMessage}
          </span>
        ) : null}
      </div>
    </>
  );
};

export default CustomSelect;
