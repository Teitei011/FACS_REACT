import React from "react";
import "./Navbar.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "#282c34",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>FACS</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><div /></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Score: 0 / 0</Paper>
        </Grid>
      </Grid>
  );
};

export default Navbar;
