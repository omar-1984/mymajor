import React from "react";
import "./App.css";
import MainPage from "./components/mainPage";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <MainPage />
      </Grid>
    </Grid>
  );
}

export default App;
