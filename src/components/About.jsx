import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./Card.jsx";
import MilhemImg from "./pictures/Milhem.jpg";
import AbdallahImg from "./pictures/Abdallah.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  pageHeader: {
    fontFamily: theme.typography.fontFamily[2],
    flex: 1,
    fontSize: 70,
  },
  page: {
    backgroundColor: "red",
  },
}));

const About = () => {
  const Classes = useStyles();

  return (
    <Grid container direction="row">
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
              bio="this is abdallah"
              name="Abdallah Mahmoud"
            />
          </Grid>
          <Grid item>
            <MediaCard
              image={MilhemImg}
              bio="this is Milhem"
              name="Mohamad Milhem"
            />
          </Grid>
          <Grid item>
            <MediaCard image={"#"} bio="this is Sireen" name="Sireen Qadah" />
          </Grid>
          <Grid item>
            <MediaCard image={"#"} bio="this is Omar" name="Omar fetian" />
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
