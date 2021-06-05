import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import "./Gamming.css";
import ExampleImage from "../images/emotion.jpg";

const GammingPage = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  return (
    <main>
      <Navbar className="topbar" />

  <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >

      <img src={ExampleImage} alt="ExampleImage" height="500rem"></img>

      <ButtonGroup
        className="buttonGroup"
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
        position="bottom"
      >
        <Button>Anger</Button>
        <Button>Fear</Button>
        <Button>Disgust</Button>
        <Button>Comtempt</Button>
        <Button>Joy</Button>
        <Button>Surprise</Button>
        <Button>Sadness</Button>
      </ButtonGroup>

      </ Grid >
    </main>
  );
};

export default GammingPage;
