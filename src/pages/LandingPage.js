import Intro from "../images/index.jpeg"; // gives image path
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  .img{
    width: 40rem;
  }
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

const LadingPage = () => {
  return (
    <Wrapper>
      <center>
        <h1>FACS </h1>
      </center>

      <img src={Intro} className="img" alt="Intro"></img>

      <div style={{ "margin-top": "1rem" }} />
      <center>
        <Link to="/gamming">
          <Button className="btn">Começar</Button>
        </Link>
        <Link to="/tutorial">
          <Button className="btn">Tutorial</Button>
        </Link>
      </center>


     
    </Wrapper>
  );
};

export default LadingPage;
