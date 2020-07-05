import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Feedback from "./Feedback.jsx";
import Compare from "./Compare.jsx";
import Search from "./Search.jsx";

const MainPage = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Search">
          <Search />
        </Route>
        <Route exact path="/Compare">
          <Compare />
        </Route>
        <Route exact path="/Feedback">
          <Feedback />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainPage;
