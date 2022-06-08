import { Box, Button } from "@mui/material";
import React from "react";
import Timer from "./Timer";

export default class SetTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      startDate: "",
      endDate: "",
      diff: 0,
      buttonVal: "Start timer",
    };
  }

  showtimer = (e) => {
    {
      this.state.show === true
        ? this.setState({
            buttonVal: "Start Timer",
          })
        : this.setState({
            buttonVal: "Stop Timer",
          });
    }

    this.setState({
      show: !this.state.show,
    });
  };
  startTimer = (e) => {
    if (this.state.show === false) {
      this.setState(
        {
          endDate: new Date(),
        },
        function () {
          this.setState({
            diff: (this.state.endDate - this.state.startDate) / 1000,
          });
        }
      );
    } else {
      this.setState({ diff: 0 });
      this.setState({
        startDate: new Date(),
      });
    }
  };

  render() {
    return (
      <div>
        <Box>Duration : {this.state.diff} Seconds</Box>
        <Button variant="contained" onClick={this.showtimer}>
          <span class="material-symbols-outlined">timer </span>
          {this.state.buttonVal}
        </Button>
        {this.state.show === true && <Timer startTimer={this.startTimer} />}
      </div>
    );
  }
}
