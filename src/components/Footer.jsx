import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainFooter: {
    backgroundColor: "#2E3B55",
    color: "#d0e0e3ff",
    wordSpacing: "3px",
    lineHeight: "20px",
    bottom: "0",
    paddingTop: "2em",
    position: "relative",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
}));

const Footer = () => {
  const Classes = useStyles();
  return (
    <div className={Classes.mainFooter}>
      <Grid container flexDirection="row">
        <Grid item sm={1} xs={false}>
          {/* empty space */}
        </Grid>
        <Grid
          item
          container
          sm={11}
          xs={12}
          flexDirection="column"
          justify="center">
          <Grid item container flexDirection="row" spacing={2}>
            <Grid item sm={4} justify="center" alignItems="center">
              <h4>Contact us:</h4>
              <ul className={Classes.list}>
                <li>00-000-0000</li>
                <li>example.blabla@example.com</li>
                <li>Ramallah, bla bla</li>
              </ul>
            </Grid>
            <Grid item sm={4} justify="center" alignItems="center">
              <h4>Meet our staff:</h4>
              <ul className={Classes.list}>
                <li>Abdallah Mahmood</li>
                <li>Sireen Qadaah</li>
                <li>Omar Fitian</li>
                <li>Mohamad Milhem</li>
              </ul>
            </Grid>
            <Grid item sm={4} justify="center" alignItems="center">
              <h4>Just a thrid cal</h4>
              <ul className={Classes.list}>
                <li>Abdallah Mahmood</li>
                <li>Sireen Qadaah</li>
                <li>Omar Fitian</li>
                <li>Mohamad Milhem</li>
              </ul>
            </Grid>
          </Grid>

          <Grid item>
            <p>
              &copy;{new Date().getFullYear()} MY MAJOR | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </Grid>
        </Grid>
        <Grid item sm={2} xs={false}>
          {/* empty space */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
