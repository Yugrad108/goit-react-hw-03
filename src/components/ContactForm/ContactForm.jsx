import styles from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

function ContactForm({ onAdd }) {
  const usernameId = nanoid();
  const numberId = nanoid();

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .trim()
      .required("Required"),

    number: Yup.string()
      .matches(/^\d+$/, "Not a number")
      .min(7, "Too Short!")
      .max(9, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    username: "",
    number: "",
  };

  const handleAdd = (values, actions) => {
    if (onAdd) {
      onAdd(values);
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAdd}
      validationSchema={FeedbackSchema}
    >
      {() => (
        <Form className={styles.form}>
          <label htmlFor={usernameId}>Name</label>
          <Field className={styles.input} name="username" id={usernameId} />
          <ErrorMessage
            name="username"
            component="span"
            className={styles.error}
          />

          <label htmlFor={numberId}>Number</label>
          <Field className={styles.input} name="number" id={numberId} />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />

          <button className={styles.button} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
