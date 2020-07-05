import React from "react";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";
import CompareIcon from "@material-ui/icons/Compare";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../logo.png";
import Link from "react-router-dom/Link";

const useStyles = makeStyles((theme) => ({
  Typography: {
    color: "#61DAFB",
  },
  links: {
    textDecoration: "none",
  },
  AppBar: {
    background: "#2E3B55",
    position: "static",
  },
}));

const Header = () => {
  const Classes = useStyles();
  return (
    <div className={Classes.container}>
      <AppBar className={Classes.AppBar}>
        <Toolbar>
          <Link to="/" className={Classes.links}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Link to="/Compare" className={Classes.links}>
            <IconButton>
              <CompareIcon className={Classes.Typography} />
              <Typography className={Classes.Typography}>Compare</Typography>
            </IconButton>
          </Link>
          <Link to="/Search" className={Classes.links}>
            <IconButton>
              <SearchIcon className={Classes.Typography} />
              <Typography className={Classes.Typography}>Search</Typography>
            </IconButton>
          </Link>
          <Link to="/About" className={Classes.links}>
            <IconButton>
              <InfoIcon className={Classes.Typography} />
              <Typography className={Classes.Typography}>About</Typography>
            </IconButton>
          </Link>
          <Link to="/Feedback" className={Classes.links}>
            <IconButton>
              <FeedbackIcon className={Classes.Typography} />
              <Typography className={Classes.Typography}>Feedback</Typography>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
