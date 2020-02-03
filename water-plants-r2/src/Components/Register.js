import React from "react";
import axios from "axios";
import { axiosWithAuth } from "../Utilities-auth/Auth";

class Register extends React.Component {
  state = {
    newUser: {
      id: "",
      username: "",
      password: "",
      email: "",
      telephone: ""
    }
  };
  handleChange = e => {
    // <---- handle change function
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
      .post("api/auth/register", this.state.newUser) 
      .then(res => {
        localStorage.setItem("token", res.data);
        // this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Creat Account</h1>
        <form onSubmit={this.Register}>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.newUser.username}
            onChange={this.handleChange}
          />
          Email:
          <input
            type="text"
            name="email"
            value={this.state.newUser.email}
            onChange={this.handleChange}
          />
          Phone Number:
          <input
            type="text"
            name="telephone"
            value={this.state.newUser.telephone}
            onChange={this.handleChange}
          />
          Password:
          <input
            type="text"
            name="password"
            value={this.state.newUser.password}
            onChange={this.handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
