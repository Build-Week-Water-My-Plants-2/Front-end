import React from "react";
import axios from "axios";
import  axiosWithAuth  from "../Utilities-auth/Auth";
// import {useHistory} from 'react-router-dom'
import "./Login.css"
import {LogForm, 
   UserForm, 
   Input, 
   Button,
   IconDiv,
   Title,
   Title2,
   Label,
   EmailWrapper,
   PasswordWrapper,
   MemberLink,
   Anchor} from "../styles/LoginStyles"
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

   import {
    faSeedling,
    faUser,
    faUnlockAlt,
    faEyeSlash
  } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  
  handleChange = e => {
    // <---- handle change function
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  

  login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post(
        "/auth/login",
        this.state.credentials
      ) // need backend endpoint here as well.
      .then(res => {
          console.log(res)
        localStorage.setItem("token", res.data.token);
         this.props.history.push("/plants");

         let welcomeMessage = res.data.message;
         axiosWithAuth().get("/users")
          .then(res => {
           let user = res.data.filter(user=>welcomeMessage.includes(user.username))
           // setUserInfo(user[0].id);
          //  this.props.setUserID(user[0].id);
           console.log('login props', this.props);
           this.props.history.push(`/users/${user[0].id}/plants`)
           // console.log('user from login2', user[0].id);
         })
          .catch(err => console.log(err))





      })
      .catch(err => console.log(err));
  };

  render() {
    
    return (
      
      <UserForm className="form">
      <IconDiv>
        <FontAwesomeIcon icon={faSeedling}  className="main-icon" />
      </IconDiv>
        <Title>Sign In</Title>
        <LogForm onSubmit={this.login}>
         <Label htmlFor="username">UserName: </Label>
         <EmailWrapper>
         <FontAwesomeIcon icon={faUser}  />
          <Input
            id="username"
            type="text"
            name="username"
            placeholder="Email..."
            value={this.state.credentials.username}
            onChange={this.handleChange} // <---- Handle function goes here//
          />
          </EmailWrapper>
          <Label htmlFor="password">Password: </Label>
         <PasswordWrapper>
         <FontAwesomeIcon icon={faUnlockAlt} />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password..."
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          </PasswordWrapper>
          <Button>Log In</Button>

        <MemberLink>
          <Title2>Not a member?</Title2>
          <Anchor to="/register">Sign up</Anchor>
        </MemberLink>


        </LogForm>
      </UserForm>
      
    );
  }
}

export default Login;
