import React from "react";

const CustomSelectOptions = ({
  value = "",
  label,
  disabled = false,
  ...otherProps
}) => {
  return (
    <option value={value} disabled={disabled} {...otherProps}>
      {label}
    </option>
  );
};

export default CustomSelectOptions;
