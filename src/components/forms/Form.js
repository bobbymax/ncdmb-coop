import { Formik } from "formik";

const AppForm = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  innerRef,
  ...otherProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      innerRef={innerRef}
      {...otherProps}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
