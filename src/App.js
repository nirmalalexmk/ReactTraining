import React from "react";
import Test from "./Components/testproject";
import Styling from "./Components/stylingStateVar";
import Heading from "./Components/headingAssignment";
import Timer from "./Components/Timer";
import "./App.css";
import Apicall from "./Components/apiCall";
import Splice from "./Components/splice";
import { Box, Button, Grid, TextField } from "@mui/material";

import Landing from "./Components/landing";
import Footer from "./Components/footer";

export default class testclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      link: "",
    };
  }

  render() {
    return (
      <div>
        <Landing />
      </div>
    );
  }
}
