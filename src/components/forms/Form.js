import { Formik } from "formik";

const AppForm = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  innerRef,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      innerRef={innerRef}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
