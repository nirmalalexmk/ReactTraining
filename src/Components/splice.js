import {
  Button,
  Grid,
  Icon,
  IconButton,
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
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);

        this.setState({ names: resJson.data });
      });
  }
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      first_name: "",
      last_name: "",
      open: false,
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
    var u = this.state.names;
    u.push({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    });
    this.setState({
      names: u,
    });
    this.handleClose();
  };
  splice = (e) => {
    console.log(e.target.value);
    var a = this.state.names;
    a.splice(e.target.value, 1);
    this.setState({ names: a });
  };
  showNames = (name, index) => {
    return (
      <ListItem
        key={index}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <Icon value={index} onClick={this.splice}>
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

        <Grid container style={{ overflow: "scroll" }} lg={12} sm={12} xs={12}>
          <List style={{ width: 500, height: 350 }}>
            {this.state.names.map(this.showNames)}
          </List>
        </Grid>
      </div>
    );
  }
}
