import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import imgLogo from "../Images/nextstackLogo.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid Item lg={12} xs={12}>
            <Box>
              <img style={{ height: 20, width: 20 }} src={imgLogo} alt=""></img>

              <br />
              <Typography variant="h7" fontFamily={"Segoe UI Emoji"}>
                © Nextstack. 2021, Maccarian. All rights reserved When you visit
                or interact with our sites, services or tools, we or our
                authorised service providers may use cookies for storing
                information to help provide you with a better, faster and safer
                experience and for marketing purposes.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}
