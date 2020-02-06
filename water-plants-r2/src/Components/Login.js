import React from "react";
import axios from "axios";
import  axiosWithAuth  from "../Utilities-auth/Auth";
// import {useHistory} from 'react-router-dom'

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
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.login}>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange} // <---- Handle function goes here//
          />
          Password:{" "}
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
