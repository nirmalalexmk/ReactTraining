import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";

export default class Styling extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: "",
      bgColor2: "",
    };
  }

  setColor = (e) => {
    this.setState({ bgColor: e.target.value });
  };

  render() {
    var color;
    return (
      <Grid container>
        <Grid Item lg={12} sm={12} xs={12}>
          <Box
            style={{
              borderBlockStyle: "groove",
              backgroundColor: this.state.bgColor,
              "&:hover": {
                backgroundColor: this.state.bgColor,
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <h2> Onchange Textbox</h2>

            <TextField
              id="colorTxt1"
              style={{ width: 150 }}
              placeholder="Enter the color"
              onChange={this.setColor}
            ></TextField>
          </Box>
        </Grid>
        <Grid
          Item
          lg={12}
          sm={12}
          xs={12}
          style={{
            width: 50,
            borderBlockStyle: "groove",

            backgroundColor: this.state.bgColor2,
            "&:hover": {
              backgroundColor: this.state.bgColor2,
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <h2> Onclick Textbox</h2>

          <TextField
            id="colorTxt2"
            label="Enter the color and press Submit"
            onChange={(e) => (color = e.target.value)}
          ></TextField>
          <Button
            type="submit"
            variant="outlined"
            onClick={(e) => this.setState({ bgColor2: color })}
          >
            submit
          </Button>
        </Grid>
      </Grid>
    );
  }
}
