import React from "react";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";
import CompareIcon from "@material-ui/icons/Compare";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { makeStyles, fade } from "@material-ui/core/styles";
import logo from "../logo.png";

const useStyles = makeStyles((theme) => ({}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <img src={logo} alt="logo" className="logo" />
          <IconButton>
            <CompareIcon />
            <Typography>Compare</Typography>
          </IconButton>
          <IconButton>
            <SearchIcon />
            <Typography>Search</Typography>
          </IconButton>
          <IconButton>
            <InfoIcon />
            <Typography>About</Typography>
          </IconButton>
          <IconButton>
            <FeedbackIcon />
            <Typography>Feedback</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
