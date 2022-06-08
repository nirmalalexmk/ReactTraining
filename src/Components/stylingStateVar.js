import { Box, Grid } from "@mui/material";
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
      <Grid container md={12} sm={7} xs={7}>
        <Grid Item md={6} sm={7} xs={7}>
          <Box
            sx={{
              borderBlockStyle: "groove",
              width: 150,
              height: 100,
              backgroundColor: this.state.bgColor,
              "&:hover": {
                backgroundColor: this.state.bgColor,
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <h2> Onchange Textbox</h2>
          </Box>

          <input
            id="colorTxt1"
            style={{ width: 150 }}
            placeholder="Enter the color"
            onChange={this.setColor}
          ></input>
        </Grid>
        <Grid Item md={6} sm={7} xs={7}>
          <Box
            sx={{
              borderBlockStyle: "groove",
              width: 150,
              height: 100,
              backgroundColor: this.state.bgColor2,
              "&:hover": {
                backgroundColor: this.state.bgColor2,
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <h2> Onclick Textbox</h2>
          </Box>
          <input
            style={{ width: 150 }}
            id="colorTxt2"
            placeholder="Enter the color and press Submit"
            onChange={(e) => (color = e.target.value)}
          ></input>
          <input
            type="submit"
            onClick={(e) => this.setState({ bgColor2: color })}
          ></input>
        </Grid>
      </Grid>
    );
  }
}
