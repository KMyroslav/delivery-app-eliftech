import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../../redux/user/userSlice";
import { Bars } from "react-loader-spinner";
import * as yup from "yup";

import { placeOrder } from "redux/order/orderOperations";
import getCart from "redux/cart/cartSelectors";
import getOrderStatus from "redux/order/orderSelectors";
import getShops from "redux/shops/shopsSelectors";

import VerificationError from "./VerificationError";

import styles from "./cartForm.module.scss";

export default function CartForm() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector(getOrderStatus);
  const { items, totalPrice } = useSelector(getCart);
  const { currentShop } = useSelector(getShops);

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
        onSubmit={(values) => {
          dispatch(
            placeOrder({
              shop: currentShop._id,
              user: values,
              items,
              totalPrice,
            })
          );
          dispatch(
            userSlice.actions.addUserData({
              data: values,
            })
          );
        }}
        validationSchema={validationsSchema}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            Name
            <Field
              autoComplete="on"
              name="name"
              placeholder="Marcus Smith"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component={VerificationError}
              className={styles.error}
            />
          </label>
          <label className={styles.label}>
            Email
            <Field
              autoComplete="on"
              type="email"
              name="email"
              placeholder="MarcusSmith@coolmail.com"
              id="email"
              className={styles.input}
            />
            <ErrorMessage name="email" component={VerificationError} />
          </label>
          <label className={styles.label}>
            Phone
            <Field
              autoComplete="on"
              type="phone"
              name="phone"
              placeholder="0907773333"
              className={styles.input}
            />
            <ErrorMessage name="phone" component={VerificationError} />
          </label>
          <label className={styles.label}>
            Address
            <Field
              autoComplete="on"
              type="string"
              name="address"
              placeholder="614 Main St, Falmouth, MA"
              className={styles.input}
            />
            <ErrorMessage name="address" component={VerificationError} />
          </label>
          <div className={styles.checkOutWrapper}>
            <p className={styles.totalPrice}>
              Total price {Number(totalPrice).toFixed(2) || "0.00"}$
            </p>

            <button className={styles.orderButton} type="submit">
              {isLoading ? (
                <Bars
                  height="30"
                  width="30"
                  color="#2196f3"
                  ariaLabel="loading-indicator"
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
