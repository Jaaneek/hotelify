import React from "react";
import { useFormik } from "formik";
import * as Styles from "./styles";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your name is too short")
    .required("Please enter your full name"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(9, "Phone no. must be atleast 9 digits")
    .notRequired(),
  address: Yup.string().required("Please enter your address"),
});

const AuthPageComponent = (): React.ReactElement => {
  const {
    values,
    setFieldValue,
    errors,
    validateField,
    validateForm,
    isValid,
    submitForm,
  } = useFormik<{
    email: string;
    name: string;
    phoneNumber: string;
    address: string;
  }>({
    initialValues: { email: "", address: "", phoneNumber: "", name: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //do something
      validateForm();
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(e.target.id, e.target.value, false).then(() => {
      validateField(e.target.id);
    });
  };

  return (
    <Styles.Layout>
      <Styles.Container>
        <Styles.InputContainer>
          <Styles.Label>Name</Styles.Label>
          <div>
            <Styles.Input
              id="name"
              onChange={onChange}
              value={values.name}
              placeholder={"Name"}
            />
            {errors.name && <Styles.Error>{errors.name}</Styles.Error>}
          </div>
        </Styles.InputContainer>
        <Styles.InputContainer>
          <Styles.Label>Address</Styles.Label>
          <div>
            <Styles.Input
              id="address"
              onChange={onChange}
              value={values.address}
              placeholder={"Address"}
            />
            {errors.address && <Styles.Error>{errors.address}</Styles.Error>}
          </div>
        </Styles.InputContainer>
        <Styles.InputContainer>
          <Styles.Label>Phone</Styles.Label>{" "}
          <div>
            <Styles.Input
              id="phoneNumber"
              onChange={onChange}
              value={values.phoneNumber}
              placeholder={"phoneNumber"}
            />
            {errors.phoneNumber && (
              <Styles.Error>{errors.phoneNumber}</Styles.Error>
            )}
          </div>
        </Styles.InputContainer>
        <Styles.InputContainer>
          <Styles.Label>E-mail</Styles.Label>
          <div>
            <Styles.Input
              id="email"
              onChange={onChange}
              value={values.email}
              placeholder={"E-mail"}
            />
            {errors.email && <Styles.Error>{errors.email}</Styles.Error>}
          </div>
        </Styles.InputContainer>
        <Styles.SubmitButton onClick={() => submitForm()} disabled={!isValid}>
          Finish booking
        </Styles.SubmitButton>
      </Styles.Container>
    </Styles.Layout>
  );
};

export default AuthPageComponent;
