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
              // value={field.value}
              className={className}
              checked={field.value}
              {...field}
            />
          );
        }}
      />
      <label htmlFor="" className="ml-2">
        {label}
      </label>
    </>
  );
}
