import { Grid } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

export default class Heading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item lg={12} sm={12} xs={12}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 4,
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box sx={{ color: "text.secondary" }}>{this.props.value}</Box>

            <Box
              sx={{ color: "success.dark", fontSize: 16, verticalAlign: "sub" }}
            />
          </Box>
          <h2></h2>
        </Grid>
      </Grid>
    );
  }
}
