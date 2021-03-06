import React, { useState } from "react";
import {
  TextField,
  Grid,
  createMuiTheme,
  MuiThemeProvider,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { db } from "../services/firebase1.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#61dafb",
    },
  },
});

const useStyles = makeStyles((theme) => ({
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
}));

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
    <form onSubmit={handleSubmit}>
      <Grid container className={classes.container}>
        <MuiThemeProvider theme={theme}>
          <Grid item xs={12} className={classes.container}>
            <h1
              style={{
                fontFamily: theme.typography.fontFamily[2],
                fontSize: 35,
              }}
            >
              Feedback
            </h1>
          </Grid>
          <Grid item xs={6} className={classes.container}>
            <h3 style={{ fontFamily: theme.typography.fontFamily[2] }}>
              Share your thoughts with our team!
            </h3>
          </Grid>
          <Grid item xs={12} className={classes.inputContainer}>
            <TextField
              required
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
              required
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
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </MuiThemeProvider>
      </Grid>
    </form>
  );
};

export default Feedback;
