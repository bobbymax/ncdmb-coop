// import React from "react";
// import { useFormikContext } from "formik";

// const CustomCheckbox = ({ label, name }) => {
//   const { values, setFieldValue } = useFormikContext();

//   return (
//     <>
//       <div class="form-check">
//         <input
//           class="form-check-input"
//           type="checkbox"
//           checked={name ? true : false}
//           value={values[name]}
//           onChange={({ target: { value } }) => setFieldValue(name, !value)}
//           id="defaultCheck1"
//         />
//         <label class="form-check-label" htmlFor="defaultCheck1">
//           {label}
//         </label>
//       </div>
//     </>
//   );
// };

// export default CustomCheckbox;

import { Field } from "formik";

export default function CustomCheckbox({ id, name, label, className }) {
  return (
    <>
      <Field
        name={name}
        render={({ field, form }) => {
          return (
            <input
              type="checkbox"
              id={id}
              className={className}
              checked={field.value}
              {...field}
            />
          );
        }}
      />
      <label htmlFor="">{label}</label>
    </>
  );
}
