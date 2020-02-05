import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
// import axios from "axios";
import * as yup from "yup";
import { Button, StyledResults } from "./SignUpStyles";
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

const NewUser = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [user, status]);

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
          <Input id="name" type="text" name="name" placeholder="name" />
        </EmailWrapper>
        {touched.name && errors.name && (
          <p
            className="error"
            style={{ fontSize: ".75rem", color: "red", marginBottom: "0" }}
          >
            {errors.name}
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
          <Input type="phone" name="phone" placeholder="(555)-555-555" />
        </EmailWrapper>
        {touched.phone && errors.phone && (
          <p
            className="error"
            style={{ fontSize: ".75rem", color: "red", marginBottom: "0" }}
          >
            {errors.phone}
          </p>
        )}

        <Button type="submit">Submit</Button>
      </LogForm>
      {}
      {user.map((person) => (
        <div>
          <StyledResults>
            <ul key={person.id}>
              <div>Name: {person.name}</div>
              <div>Email: {person.email}</div>
            </ul>
          </StyledResults>
        </div>
      ))}
    </UserForm>
  );
};
const FormikNewUser = withFormik({
  mapPropsToValues({ name, email, password, phone, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      phone: phone || ""
    };
  },
  validationSchema: yup.object().shape({
    name: yup
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
    phone: yup
      .number()
      .min(8, "Please enter your phone number here.")
      .required("Required field.")
  })
  // handleSubmit(values, { setStatus, resetForm }) {
  //   axios
  //     .post("https://water-my-plants-2.herokuapp.com/api/auth", values)
  //     .then((response) => {
  //       setStatus(response.data);
  //       resetForm();
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error.response));
  // }
})(NewUser);
export default FormikNewUser;
