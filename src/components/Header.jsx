import React from "react";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";
import CompareIcon from "@material-ui/icons/Compare";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../logo.png";
import Link from "react-router-dom/Link";

const useStyles = makeStyles((theme) => ({}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Link to="/Compare">
            <IconButton>
              <CompareIcon />
              <Typography>Compare</Typography>
            </IconButton>
          </Link>
          <Link to="/Search">
            <IconButton>
              <SearchIcon />
              <Typography>Search</Typography>
            </IconButton>
          </Link>
          <Link to="/About">
            <IconButton>
              <InfoIcon />
              <Typography>About</Typography>
            </IconButton>
          </Link>
          <Link to="/Feedback">
            <IconButton>
              <FeedbackIcon />
              <Typography>Feedback</Typography>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
