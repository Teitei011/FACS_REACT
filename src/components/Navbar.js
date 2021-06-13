import React from "react";
import "./Navbar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 0.5fr;
`;


const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h3 className="title">FACS</h3>
      </Link>
      <div />
      <h3 className="score">Score: 0 / 0</h3>
    </Wrapper>
  );
};

export default Navbar;
