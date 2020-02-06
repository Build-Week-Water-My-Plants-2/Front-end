import React, { useState } from "react";
import { withFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { Button } from "./SignUpStyles";
import {
  LogForm,
  UserForm,
  IconDiv,
  Label,
  Input,
  Title,
  EmailWrapper,
  PasswordWrapper
} from "./LoginStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faUser,
  faUnlockAlt,
  faPhone,
  faEnvelopeSquare,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

const NewUser = ({ values, errors, touched }) => {
  const [toggleShow, setToggleShow] = useState(values.password);

  return (
    <UserForm>
      <IconDiv>
        <FontAwesomeIcon icon={faSeedling} className="main-icon" />
      </IconDiv>
      <Title>Sign Up</Title>
      <LogForm>
        <Label htmlFor="name">Enter Name</Label>
        <EmailWrapper>
          <FontAwesomeIcon icon={faUser} />
          <Input id="name" type="text" name="username" placeholder="name" />
        </EmailWrapper>
        {touched.username && errors.username && (
          <p
            className="error"
            style={{ fontSize: ".75rem", color: "red", marginBottom: "0" }}
          >
            {errors.username}
          </p>
        )}

        <Label htmlFor="email">Enter Email</Label>
        <EmailWrapper>
          <FontAwesomeIcon icon={faEnvelopeSquare} />
          <Input id="email" type="email" name="email" placeholder="Email" />
        </EmailWrapper>
        {touched.email && errors.email && (
          <p
            className="error"
            style={{ fontSize: ".75rem", color: "red", marginBottom: "0" }}
          >
            {errors.email}
          </p>
        )}

        <Label htmlFor="password">Choose Password</Label>
        <PasswordWrapper>
          <FontAwesomeIcon icon={faUnlockAlt} />
          <Input
            id="password"
            type={toggleShow ? "text" : "password"}
            autoComplete="false"
            name="password"
            placeholder="●●●●●●●●"
          />
          <FontAwesomeIcon
            onClick={() => setToggleShow(!toggleShow)}
            icon={faEyeSlash}
          />
        </PasswordWrapper>
        {touched.password && errors.password && (
          <p
            className="error"
            style={{ fontSize: ".75rem", color: "red", marginBottom: "0" }}
          >
            {errors.password}
          </p>
        )}

        <Label htmlFor="phone">Enter Phone #</Label>
        <EmailWrapper>
          <FontAwesomeIcon icon={faPhone} />
          <Input
            id="phone"
            type="tel"
            name="phone_number"
            placeholder="(555)-555-555"
          />
        </EmailWrapper>
        {touched.phone_number && errors.phone_number && (
          <p
            className="error"
            style={{ fontSize: ".75rem", color: "red", marginBottom: "0" }}
          >
            {errors.phone_number}
          </p>
        )}

        <Button type="submit">Submit</Button>
      </LogForm>
    </UserForm>
  );
};
const FormikNewUser = withFormik({
  mapPropsToValues({ username, email, password, phone_number }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      phone_number: phone_number || ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup
      .string()
      .min(2, "Name must have more than one character.")
      .required("Required field."),
    email: yup
      .string()
      .email("Email not valid.")
      .required("Required field."),
    password: yup
      .string()
      .min(6, "Password must have at least 6 characters.")
      .required("Required field."),
    phone_number: yup
      .number()
      .min(8, "Please enter your phone number here.")
      .required("Required field.")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://water-my-plants-2.herokuapp.com/api/auth/register", values)
      .then((response) => {
        setStatus(response.data);
        resetForm();
        console.log(response);
      })
      .catch((error) => console.log(error.response));
  }
})(NewUser);
export default FormikNewUser;
