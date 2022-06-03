import React from "react";
// import InputLabel from '@mui/material/InputLabel';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { Avatar, List, ListItem, ListItemAvatar, ListItemText, IconButton, Icon } from "@mui/material";

export default class MuiLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      pwd: "",
    };
  }

  handleUnameOnChange = (e) => {
    this.setState({
      uname: e.target.value,
    });
  };

  handlePwdOnChange = (e) => {
    this.setState({
      pwd: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <br />
        {/* User Name : <input id="username" type="text"></input> <br />
        Password : <input id="password" type="password"></input> <br /> */}
        {/* <InputLabel htmlFor="input-with-icon-adornment">
          User Name :
        </InputLabel> */}
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          onChange={this.handleUnameOnChange}
        />
        <br /> <br />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          onChange={this.handlePwdOnChange}
        />
        <br />
        <br />
        <Button variant="contained" onClick={this.login}>
          Login
        </Button>
      </div>
    );
  }

  login = () => {
    if (this.state.uname == "" || this.state.pwd == "") {
      alert("Please enter user name and password");
      return false;
    }
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.uname,
        password: this.state.pwd,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.token !== null && resJson.token !== undefined) {
          alert("Login successfull. Welcome " + "Eve");
        } else {
          alert("Login failed. Please check your user name and password");
        }
        console.log(resJson);
      });
  };
}
