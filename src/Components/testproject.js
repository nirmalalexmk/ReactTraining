import { Button, Grid, TextField } from "@mui/material";
import React from "react";

var a = 10;
export default class test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
    console.log(this.props);
  }
  update = () => {
    a = a + 10;
    this.setState({
      num: a,
    });

    //alert(a);
  };

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField value={this.state.num}></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={this.update}>
            Click to Add Value
          </Button>
        </Grid>
      </Grid>
    );
  }
}
