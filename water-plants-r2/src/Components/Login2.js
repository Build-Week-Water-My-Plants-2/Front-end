// import React, { useState } from "react";
// import { withFormik, getIn } from "formik";
// import * as Yup from "yup";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSeedling,
//   faUser,
//   faUnlockAlt,
//   faEyeSlash
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   LogForm,
//   Input,
//   Button,
//   IconDiv,
//   UserForm,
//   Title,
//   Title2,
//   Label,
//   EmailWrapper,
//   PasswordWrapper,
//   MemberLink,
//   Anchor
// } from "../styles/LoginStyles";
// import { withRouter, Link, useHistory } from "react-router-dom";
// import axiosWithAuth from "../Utilities-auth/Auth";
// function getStyles(errors, fieldName) {
//   if (getIn(errors, fieldName)) {
//     return {
//       border: "1px solid red"
//     };
//   }
// }
// function LoginForm({ values, errors, touched, status, isSubmitting }) {
//   const [toggleShow, setToggleShow] = useState(values.password);
  

//   return (
//     <UserForm>
//       <IconDiv>
//         <FontAwesomeIcon icon={faSeedling} className="main-icon" />
//       </IconDiv>
//       <Title>Login</Title>
//       <LogForm>
//         <Label htmlFor="username">Username</Label>
//         <EmailWrapper>
//           <FontAwesomeIcon icon={faUser} />
//           <Input
//             id="username"
//             type="text"
//             name="username"
//             placeholder="Username..."
//             style={getStyles(errors, "username")}
//           />
//         </EmailWrapper>
//         {touched.username && errors.username && (
//           <p
//             className="errors"
//             style={{ fontSize: ".75rem", color: "red", marginBottom: "0" }}
//           >
//             {errors.username}{" "}
//           </p>
//         )}
//         <Label htmlFor="password">Password</Label>
//         <PasswordWrapper>
//           <FontAwesomeIcon icon={faUnlockAlt} />
//           <Input
//             id="password"
//             type={toggleShow ? "text" : "password"}
//             name="password"
//             autoComplete="false"
//             placeholder="Password..."
//             style={getStyles(errors, "password")}
//           />
//           <FontAwesomeIcon
//             onClick={() => setToggleShow(!toggleShow)}
//             icon={faEyeSlash}
//           />
//         </PasswordWrapper>
//         {touched.password && errors.password && (
//           <p style={{ fontSize: ".75rem", color: "red", marginBottom: "0" }}>
//             {errors.password}{" "}
//           </p>
//         )}
//         {/* <Link to="/plants"> */}
//         <Button disabled={isSubmitting}>Log In</Button>
//         {/* </Link> */}
//         <MemberLink>
//           <Title2>Not a member?</Title2>
//           <Anchor to="/register">Sign up</Anchor>
//         </MemberLink>
//       </LogForm>
//     </UserForm>
//   );
// }
// const FormikUserForm = withRouter(
//   withFormik({
//     mapPropsToValues({ password, username }) {
      
//       return {
//         username: username || "",
//         password: password || ""
//       };
//     },
//     validationSchema: Yup.object().shape({
//       username: Yup.string()
//         .required("username required")
//         .min(3, "username must be at least 3 characters"),
//       password: Yup.string()
//         .min(7, "password must be at least 7 characters")
//         .required("password required")
//     }),
//     handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
//       console.log("submitting", values);
//       axiosWithAuth()
//         .post("/auth/login", values)
//         .then((res) => {
//           console.log("success", res);
          
//           localStorage.setItem("token", res.data.token);
//           const login = res.data;
//           setStatus(login);
//           // setSubmitting(false);
//           // resetForm();
//           //string
//           let welcomeMessage = res.data.message;
          
//       //     axiosWithAuth()
//       //       .get("/users")
//       //       .then(res => {
//       //         let user = res.data.filter(user=>welcomeMessage.includes(user.username))
//       //         // setUserInfo(user[0].id);
//       //         // const history = useHistory();
//       //         // history.push(`/users/${user[0].id}/plants`)
//       //         // console.log('user from login2', user[0].id);
//       //       })
//       // .catch(err => console.log(err));
//       //   })
//         .catch((err) => {
//           console.log(err.response);
//         });
//     }
//   })(LoginForm)
// );
// export default FormikUserForm;