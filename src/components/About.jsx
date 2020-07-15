import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./Card.jsx";
import MilhemImg from "./pictures/Milhem.jpg";
import AbdallahImg from "./pictures/Abdallah.jpeg";
import OmarImg from "./pictures/OmarNew.jpg";
import SireenImg from "./pictures/Sireen.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "60vh",
  },
  media: {
    height: 170,
  },
  pageHeader: {
    fontFamily: theme.typography.fontFamily[2],
    flex: 1,
    fontSize: 70,
  },
}));

const About = () => {
  const Classes = useStyles();

  return (
    <Grid container direction="row" className={Classes.root}>
      <Grid item sm={1} xs={false}>
        {/* empty space on edges */}
      </Grid>
      <Grid item container sm={10} xs={12} direction="column">
        <h1 item className={Classes.pageHeader}>
          About
        </h1>
        <Grid item container spacing={6}>
          <Grid item>
            <MediaCard
              image={AbdallahImg}
              bio="Front-end Developer"
              name="Abdallah Mahmoud"
            />
          </Grid>
          <Grid item>
            <MediaCard
              image={MilhemImg}
              bio="Back-end Developer"
              name="Mohamad Milhem"
            />
          </Grid>
          <Grid item>
            <MediaCard
              image={SireenImg}
              bio="Front-end Developer"
              name="Sireen Qadah"
            />
          </Grid>
          <Grid item>
            <MediaCard
              image={OmarImg}
              bio="Back-end Developer"
              name="Omar Fitian"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={1} xs={false}>
        {/* empty space on edges */}
      </Grid>
    </Grid>
  );
};

export default About;
