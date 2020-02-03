import React from "react";
import axios from "axios";
import { axiosWithAuth } from "../Utilities-auth/Auth";

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
