import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@material-ui/core";
import CompareIcon from "@material-ui/icons/Compare";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";
import logo from "../logo.png";
import "../App.css";

const useStyles = makeStyles(() => ({
  typographyStyle: {
    flex: 1,
    alignSelf: "center",
  },
  container: {
    flexGrow: 1,
  },
  iconStyles: {
    flex: 1,
    alignSelf: "flex-end",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Grid item sm={6} container direction="row-reverse">
            <IconButton>
              <CompareIcon className={classes.iconStyles}></CompareIcon>
              <Typography className={classes.typographyStyle}>
                Compare
              </Typography>
            </IconButton>
            <IconButton>
              <SearchIcon className={classes.iconStyles}></SearchIcon>
              <Typography className={classes.typographyStyle}>
                Search
              </Typography>
            </IconButton>
            <Typography className={classes.typographyStyle}>Sell</Typography>
            <Grid item sm={2} xs={0} />
            <img src={logo} alt="logo" class="logo" />
          </Grid>
          <Grid item sm={4} xs={0} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
