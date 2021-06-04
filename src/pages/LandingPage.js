import { Grid, Card } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Intro from "../images/index.jpeg"; // gives image path
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LadingPage = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
    >
      <h1>FACS </h1>

      <img src={Intro} alt="Intro"></img>

      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >

          <Link to="/gamming" className="btn">Começar</Link>
          <Link to="/tutorial" className="btn">Tutorial</Link>

      </ButtonGroup>
    </Grid>
  );
};

export default LadingPage;
