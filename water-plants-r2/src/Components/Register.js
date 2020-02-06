 import React from "react";
 import  axiosWithAuth  from "../Utilities-auth/Auth";
 import "./Register.css"
 import {
    LogForm,
    Input,
    Button,
    RegIconDiv,
    RegForm,
    Title,
    Label,
    EmailWrapper,
    PasswordWrapper,
  } from "../styles/LoginStyles";

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faUser,
  faUnlockAlt,
  faPhone,
  faEnvelopeSquare,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

 class Register extends React.Component {
   state = {
     newUser: {
       username: "",
       password: "",
       email: "",
       phone_number: ""
     }
   };
   handleChange = e => {
     this.setState({
       newUser: {
         ...this.state.newUser,
         [e.target.name]: e.target.value
       }
     });
   };

   Register = e => {
     e.preventDefault();
     axiosWithAuth()
       .post("/auth/register", this.state.newUser)
       .then(res => {
         localStorage.setItem("token", res.data.token);
       })
       .catch(err => console.log(err));
   };

   render() {
     return (
       <RegForm className="reg-form">
       <RegIconDiv>
         <FontAwesomeIcon icon={faSeedling} classname="register-icon" />
       </RegIconDiv>
         <Title>Create Account</Title>
         <LogForm onSubmit={this.Register} className="reg">
           <Label htmlFor="username">UserName: </Label>
           <EmailWrapper>
           <FontAwesomeIcon icon={faUser} />
           <Input
              id="username"
             type="text"
             name="username"
             placeholder="Username"
            value={this.state.newUser.username}
             onChange={this.handleChange}
           />
           </EmailWrapper>
           <Label htmlFor='password'>Password: </Label>
          <PasswordWrapper>
          <FontAwesomeIcon icon={faUnlockAlt} />
           <Input
             type="password"
             name="password"
             placeholder="Password"
             value={this.state.newUser.password}
             onChange={this.handleChange}
           />
        </PasswordWrapper>

        <Label htmlFor="email">Email: </Label>
        <EmailWrapper>
           <FontAwesomeIcon icon={faEnvelopeSquare} />
           <Input
             id="email"
             type="text"
             name="email"
             value={this.state.newUser.email}
             onChange={this.handleChange}
           />
           </EmailWrapper>
           <Label htmlFor="phone_number">Phone Number: </Label>
           <EmailWrapper>
           <FontAwesomeIcon icon={faPhone} />
           <Input
             type="text"
             name="phone_number"
             value={this.state.newUser.phone_number}
             onChange={this.handleChange}
           />
           </EmailWrapper>
           <Button>Register</Button>
         </LogForm>
       </RegForm>
     );
   }
 }

 export default Register;
