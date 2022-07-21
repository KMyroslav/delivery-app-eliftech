import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../../redux/user/userSlice";
import * as yup from "yup";

export default function CartForm() {
  const dispatch = useDispatch();
  const _ = "NaN";
  const validationsSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "At least 2 letters")
      .max(25, "Please do not exceed 25 letters")
      .typeError("Text only")
      .required("Required"),

    email: yup.string().email("Incorrect email").required("Required"),
    phone: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .required("Required"),
    address: yup.string().required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
        }}
        validationSchema={validationsSchema}
      >
        {({ values, isValid, dirty }) => (
          <Form
            className={_}
            onBlur={() =>
              dispatch(
                userSlice.actions.addUserData({
                  data: values,
                  isValid: isValid && dirty,
                })
              )
            }
          >
            <Field
              autoComplete="on"
              name="name"
              placeholder="Name"
              className={_}
            />
            <ErrorMessage name="name" component="p" />

            <Field
              autoComplete="on"
              type="email"
              name="email"
              placeholder="E-mail"
              id="email"
              className={_}
            />
            <ErrorMessage name="email" component="p" />

            <Field
              autoComplete="on"
              type="phone"
              name="phone"
              placeholder="0907773333"
              className={_}
            />
            <ErrorMessage name="phone" component="p" />

            <Field
              autoComplete="on"
              type="string"
              name="address"
              placeholder="614 Main St, Falmouth, MA"
              className={_}
            />
            <ErrorMessage name="address" component="p" />
          </Form>
        )}
      </Formik>
    </>
  );
}
