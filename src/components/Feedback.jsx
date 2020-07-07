import React, { useState, useEffect } from "react";
import {
  TextField,
  Grid,
  Typography,
  createMuiTheme,
  MuiThemeProvider,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { db } from "../services/firebase.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#61dafb",
    },
  },
});

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Sans-Serif",
    flexWrap: "wrap",
  },
  inputContainer: {
    padding: "20px",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  inputText: {
    color: "#61dafb",
  },
});

const Feedback = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackText, setfeedbackText] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    db.firestore()
      .collection("feedback")
      .add({
        name: fullName,
        email: email,
        feedback: feedbackText,
      })
      .then(() => {
        setFullName("");
        setEmail("");
      })
      .catch(function (error) {
        alert(error);
        console.error("Error adding document", error);
      });
  };

  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <MuiThemeProvider theme={theme}>
        <Grid item xs={12} className={classes.container}>
          <h1>Feedback</h1>
        </Grid>
        <Grid item xs={6} className={classes.container}>
          <h3>Share your thoughts with our team!</h3>
        </Grid>
        <Grid item xs={12} className={classes.inputContainer}>
          <TextField
            label="Full Name"
            variant="filled"
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} className={classes.inputContainer}>
          <TextField
            label="E-mail"
            variant="filled"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} className={classes.inputContainer}>
          <TextField
            id="filled-multiline-static"
            label="Feedback"
            multiline
            rows={6}
            variant="filled"
            style={{
              width: "600px",
            }}
            onChange={(event) => {
              setfeedbackText(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} className={classes.inputContainer}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </MuiThemeProvider>
    </Grid>
  );
};

export default Feedback;
