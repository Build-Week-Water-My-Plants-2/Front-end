import React from "react";
import axios from "axios";
import {axiosWithAuth} from "../Utilities-auth/Auth"

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

  getData = () => {
    axiosWithAuth()
      .get("https://build-week-backend-test.herokuapp.com")
      .then(res => {
        console.log(res);
        
      })
      .catch(err => console.log(err));
  };

  
  
  login = e => {
    e.preventDefault();

    axios
      .post(
        "https://build-week-backend-test.herokuapp.com/",
        this.state.credentials
      ) // need backend endpoint here as well.
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
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
          /> Password:{" "}
          <input
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button onClick={this.getData()}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
