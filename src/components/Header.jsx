import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Grid,
} from "@material-ui/core";
import CompareIcon from "@material-ui/icons/Compare";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./pictures/logoWithoutName.png";
import Link from "react-router-dom/Link";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  Typography: {
    color: "#d0e0e3ff",
  },
  links: {
    textDecoration: "none",
  },
  AppBar: {
    background: "#20232a",
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
          <Grid container spacing={5} alignItems="center" justify="flex-end">
            <Link to="/" className={Classes.links}>
              <IconButton>
                <Grid container item spacing={1}>
                  <Grid item>
                    <HomeIcon className={Classes.Typography} />
                  </Grid>
                  <Grid item>
                    <Typography className={Classes.Typography}>Home</Typography>
                  </Grid>
                </Grid>
              </IconButton>
            </Link>
            <Link to="/Compare" className={Classes.links}>
              <IconButton>
                <Grid container item spacing={1}>
                  <Grid item>
                    <CompareIcon className={Classes.Typography} />
                  </Grid>
                  <Grid item>
                    <Typography className={Classes.Typography}>
                      Compare
                    </Typography>
                  </Grid>
                </Grid>
              </IconButton>
            </Link>
            <Link to="/Search" className={Classes.links}>
              <IconButton>
                <Grid container item spacing={1}>
                  <Grid item>
                    <SearchIcon className={Classes.Typography} />
                  </Grid>
                  <Grid item>
                    <Typography className={Classes.Typography}>
                      Search
                    </Typography>
                  </Grid>
                </Grid>
              </IconButton>
            </Link>
            <Link to="/About" className={Classes.links}>
              <IconButton>
                <Grid container item spacing={1}>
                  <Grid item>
                    <InfoIcon className={Classes.Typography} />
                  </Grid>
                  <Grid item>
                    <Typography className={Classes.Typography}>
                      About
                    </Typography>
                  </Grid>
                </Grid>
              </IconButton>
            </Link>
            <Link to="/Feedback" className={Classes.links}>
              <IconButton>
                <Grid container item spacing={1}>
                  <Grid item>
                    <FeedbackIcon className={Classes.Typography} />
                  </Grid>
                  <Grid item>
                    <Typography className={Classes.Typography}>
                      Feedback
                    </Typography>
                  </Grid>
                </Grid>
              </IconButton>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
