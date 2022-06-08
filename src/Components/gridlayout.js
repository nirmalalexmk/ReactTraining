import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default class GridLayout extends React.Component {
  render() {
    return (
      <Box
        sx={{
          width: 1160,
          height: "auto",
          marginLeft: 10,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item style={{ textAlign: "center" }}>
              <h1>Always know what you'll pay. </h1>

              <p style={{ color: "grey", fontSize: 18, lineHeight: 1.2 }}>
                Once you're setup, instantly withdraw payments or deposit into
                your bank <br />
                account within 2-3 business days.
              </p>
              <br />
              <Button
                style={{ textTransform: "none" }}
                variant="contained"
                size="small"
                color="primary"
              >
                Learn more -->
              </Button>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Grid item xs={12}>
                <Item>
                  <h1
                    style={{
                      color: "rgb(55, 125, 255)",
                      fontSize: 78,
                      textAlign: "center",
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
                  >
                    15%{" "}
                  </h1>
                  <p
                    style={{
                      color: "grey",
                      fontSize: 18,
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    per successful transaction
                  </p>
                </Item>
              </Grid>
               
              <Grid item xs={6}>
                <Item>
                  <h4>ASSIGNMENT 2 </h4>
                  <hr />
                  <p>
                    Part 1: Calculate the duration between a component mount and
                    unmount.
                  </p>
                  <p>
                    Part 2: Change the color of a div to what the user enters in
                    an input. The change should happen on click of the div.
                  </p>
                </Item>
              </Grid>
              
              
            </Item>
           </Grid> {/*15% close */}
           <Grid item xs={6}> {/*right side blue */}
                <Item>
                  <h4>right side blue </h4>
                  <hr />
                  <p>
                    Part 1: Calculate the duration between a component mount and
                    unmount.
                  </p>
                  <p>
                    Part 2: Change the color of a div to what the user enters in
                    an input. The change should happen on click of the div.
                  </p>
                </Item>
              </Grid>
        </Grid>
      </Box>
    );
  }
}
