import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import NoMatch from "./components/NoMatch";
import About from "./components/About";
import Home from "./components/Home";
import { Container, } from "semantic-ui-react"; 


const App = () => (

  <Container fluid>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
      </Container>

);


export default App;
