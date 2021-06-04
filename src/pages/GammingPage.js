import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import "./Gamming.css";

const GammingPage = () => {
  return (
    <main>
      <Navbar className="topbar" style={{ position: "relative", top: "0px" }} />
      <div className="imagePlace" style={{ height: "20rem" }}></div>
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
    </main>
  );
};

export default GammingPage;
