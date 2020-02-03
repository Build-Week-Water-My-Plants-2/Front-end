import React, { useState, useEffect } from "react";
import { withFormik, getIn } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faUser,
  faUnlockAlt
} from "@fortawesome/free-solid-svg-icons";

import {
  LogForm,
  Input,
  Button,
  IconDiv,
  UserForm,
  Title,
  Title2,
  Label,
  EmailWrapper,
  PasswordWrapper,
  MemberLink,
  Anchor
} from "./LoginStyles";

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid red"
    };
  }
}

function LoginForm({ errors, touched, status, isSubmitting }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("status has changed", status);
    status && setUsers((users) => [...users, status]);
  }, [status]);

  return (
    <UserForm>
      <IconDiv>
        <FontAwesomeIcon icon={faSeedling} className="main-icon" />
      </IconDiv>
      <Title>Login</Title>
      <LogForm>
        <Label htmlFor="email">Email</Label>
        <EmailWrapper>
          <FontAwesomeIcon icon={faUser} />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email..."
            style={getStyles(errors, "email")}
          />
        </EmailWrapper>
        {touched.email && errors.email && (
          <p
            className="errors"
            style={{ fontSize: ".75rem", color: "red", marginBottom: "0" }}
          >
            {errors.email}{" "}
          </p>
        )}

        <Label htmlFor="password">Password</Label>
        <PasswordWrapper>
          <FontAwesomeIcon icon={faUnlockAlt} />
          <Input
            id="password"
            type="password"
            name="password"
            autoComplete="false"
            placeholder="Password..."
            style={getStyles(errors, "password")}
          />
        </PasswordWrapper>
        {touched.password && errors.password && (
          <p style={{ fontSize: ".75rem", color: "red", marginBottom: "0" }}>
            {errors.password}{" "}
          </p>
        )}

        <Button type="submit" disabled={isSubmitting}>
          Log In
        </Button>
        <MemberLink>
          <Title2>Not a member?</Title2>
          <Anchor to=" https://reqres.in/api/users/">Sign up</Anchor>
        </MemberLink>
      </LogForm>

      {users.map((user) => (
        <ul key={user.id}>
          <li>Email: {user.email} </li>
          <li>Password: {user.password} </li>
        </ul>
      ))}
    </UserForm>
  );
}

const FormikUserForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("email required"),
    password: Yup.string()
      .min(7, "password must be at least 7 characters")
      .required("password required")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post(" https://reqres.in/api/users/", values)
      .then((res) => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
})(LoginForm);

export default FormikUserForm;
