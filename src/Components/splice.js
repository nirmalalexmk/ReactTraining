import {
  Button,
  Grid,
  Icon,
  IconButton,
  Input,
  List,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default class Splice extends React.Component {
  componentDidMount() {
    var a = [
      { first_name: "anand", last_name: "sukumaran" },

      { first_name: "akshay", last_name: "G" },
    ];

    //console.log(a);
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.result.length);
        if (resJson.result.length == 0) {
          fetch("http://localhost:8000/user", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              {
                first_name: "anand",
                last_name: "sukumaran",
              },

              {
                first_name: "akash",
                last_name: "g",
              },
              {
                first_name: "ram",
                last_name: "shankar",
              },
              {
                first_name: "akhil",
                last_name: "ravindran",
              },
            ]),
          })
            .then((res) => res.json())
            .then((resJson) => {
              console.log(resJson.result);
              resJson.status == true
                ? this.setState({ names: resJson.result })
                : alert(resJson.message);
            });
        }
        this.setState({ names: resJson.result });
      });
  }
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      first_name: "",
      last_name: "",
      id: null,
      open: false,
      txtfilter: "",
      exist: false,
    };
  }

  txtfirst_nameChange = (e) => {
    this.setState({
      first_name: e.target.value,
    });
  };
  txtlast_nameChange = (e) => {
    this.setState({
      last_name: e.target.value,
    });
  };
  pushData = () => {
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.result);
        resJson.status == true
          ? this.setState({ names: resJson.result })
          : alert(resJson.message);
      });

    // var u = this.state.names;
    // u.push({
    //   first_name: this.state.first_name,
    //   last_name: this.state.last_name,
    // });
    // this.setState({
    //   names: u,
    // });
    this.handleClose();
  };
  splice = (e) => {
    var a = e.target;

    fetch("http://localhost:8000/user", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: e.target.value,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({ names: resJson.result });
      });
    // console.log(e.target.value);
    // var a = this.state.names;
    // a.splice(e.target.value, 1);
    // this.setState({ names: a });
  };
  showNames = (name, index) => {
    return (
      <ListItem
        key={name.id}
        secondaryAction={
          <IconButton value={name} edge="end" aria-label="delete">
            <Icon value={name.id} onClick={this.splice}>
              delete
            </Icon>
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <span class="material-symbols-outlined">
              <img src={name.avatar} />
            </span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name.first_name}
          secondary={name.last_name}
        ></ListItemText>
      </ListItem>
    );
  };

  handleClose = () => {
    this.setState({
      open: false,
      first_name: "",
      last_name: "",
    });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  setOpen = () => {
    this.setState({ open: true });
  };

  clearall = () => {
    this.setState({ names: [] });
  };
  filterName = (e) => {
    this.setState({ txtfilter: e.target.value }, function () {
      var somefunc = this.state.names.some(this.checksome);

      this.setState({ exist: somefunc });
    });
  };
  checksome = (name) => {
    //console.log(name.first_name + "" + this.state.txtfilter);
    return (
      name.first_name === this.state.txtfilter ||
      name.last_name === this.state.txtfilter
    );
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-describedby="alert-dialog-slide-description"
          style={{ position: "absolute", left: 0, bottom: 0 }}
        >
          <DialogTitle>{"Add Names here"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <table>
                <tr>
                  <td>First name:</td>
                  <td>
                    <TextField
                      label="first_name"
                      variant="outlined"
                      value={this.state.first_name}
                      onChange={this.txtfirst_nameChange}
                    ></TextField>
                  </td>
                </tr>
                <tr>
                  <td>Last name:</td>
                  <td>
                    <TextField
                      label="last_name"
                      variant="outlined"
                      value={this.state.last_name}
                      onChange={this.txtlast_nameChange}
                    ></TextField>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <br />
                    <Button variant="contained" onClick={this.pushData}>
                      Submit
                    </Button>
                  </td>
                </tr>
              </table>
              <br />
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <Button variant="contained" onClick={this.handleClickOpen}>
          Add New
        </Button>
        <Button variant="outlined" onClick={this.clearall}>
          Clear all
        </Button>
        <br />
        <br />

        <TextField onChange={this.filterName} label="Filter by Name">
          Filter by Name
        </TextField>
        <label>{this.state.exist == true ? "Name exist" : ""}</label>

        <Grid container style={{ overflow: "scroll" }} lg={12} sm={9} xs={8}>
          <List style={{ width: 500, height: 350 }}>
            {this.state.names.map(this.showNames)}
          </List>
        </Grid>
      </div>
    );
  }
}
