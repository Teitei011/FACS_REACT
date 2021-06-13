import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ExampleImage from "../images/emotion.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 0.6rem;
`;

const Button = styled.button`
  border-radius: 1rem;

  background-color: black; /* Green */
  border: none;
  color: white;
  padding: 0.5rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const GammingPage = () => {
  return (
    <Wrapper>
      <Navbar className="navbar" />{" "}
      <center>
        <img
          src={ExampleImage}
          alt="ExampleImage"
          className="image"
          height="500rem"
        ></img>
      </center>
      <ButtonGroup>
        <Button >Anger</Button>
        <Button>Fear</Button>
        <Button>Disgust</Button>
        <Button>Comtempt</Button>
        <Button>Joy</Button>
        <Button>Surprise</Button>
        <Button>Sadness</Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default GammingPage;
