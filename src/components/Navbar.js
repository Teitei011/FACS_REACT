import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  Button,
  Grid,
} from "@material-ui/core";


const Navbar = () => {
  return (
    <Grid container >
      <Grid item xs={3}>
        <h1>FACS</h1>
      </Grid>

      <Grid item xs={6}>
        <div />
      </Grid>

      <Grid item xs={3}>
        <h2>Score: 0 / 0</h2>
      </Grid>


    </Grid>
  );
};

export default Navbar;
