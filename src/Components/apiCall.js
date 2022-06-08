import { Button, TextField } from "@mui/material";
import React from "react";

export default class Apicall extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null, loginMessage: "" };
  }

  Submit = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        resJson.error
          ? this.setState({ loginMessage: resJson.error })
          : this.setState({
              loginMessage: "Login Successful | TokenID: " + resJson.token,
            });
      });
  };
  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  passwordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div>
        Successfull Email: eve.holt@reqres.in password:cityslicka Unsuccessfull
        Email:peter@klaven
        <table>
          <thead>
            <b>
              <h2>Login Form </h2>
            </b>
          </thead>
          <tr>
            <td>
              <TextField
                label="Email ID"
                variant="standard"
                onChange={this.emailChange}
              ></TextField>
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                label="Password"
                variant="standard"
                onChange={this.passwordChange}
              ></TextField>
            </td>
          </tr>
          <tr>
            <td>
              <br />
              <Button variant="outlined" onClick={this.Submit}>
                Login
              </Button>
            </td>
          </tr>
        </table>
        <h4>{this.state.loginMessage}</h4>
      </div>
    );
  }
}
