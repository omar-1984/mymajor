import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Feedback from "./Feedback.jsx";
import Compare from "./Compare.jsx";
import Search from "./Search.jsx";
import Footer from "./Footer.jsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "220vh",
  },

  contentWrap: {
    flex: 1,
  },
}));

const MainPage = () => {
  const Classes = useStyles();
  return (
    <div className={Classes.pageContainer}>
      <Router>
        <div className={Classes.contentWrap}>
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
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default MainPage;
