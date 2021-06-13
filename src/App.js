import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import LadingPage from "./pages/LandingPage";
import Error from "./pages/Error";
import TutorialPage from "./pages/TutorialPage";
import GammingPage from "./pages/GammingPage";
import styled from 'styled-components';


const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  background: gray;
	flex-grow: 1;

`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <LadingPage />
          </Route>
          <Route path="/tutorial">
            <TutorialPage /> 
          </Route>
          <Route path="/gamming">
            <GammingPage /> 
          </Route>
          <Route path="*">
            <Error /> 
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
