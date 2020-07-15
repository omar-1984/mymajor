import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import UWCImg from "./pictures/UWC.png";
import RhodesImg from "./pictures/Rhodes.jpg";

const styles = (theme) => ({
  container: {
    display: "flex",
    padding: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // padding: "10px",
  },
  title: {
    fontSize: 40,
  },
  subtitle: {
    flex: 1,
    fontSize: 15,
    color: "grey",
  },
  slideshow: {
    fontSize: "40px",
    backgroundColor: "aliceblue",
  },
  link: {
    "&:visited": {
      color: "#2E3B55",
    },
    "&:link": {
      color: "#61dafb",
    },
    "&:hover": {
      color: "lightblue",
    },
    "&:active": {
      color: "lightblue",
    },
  },
});

class Home extends Component {
  constructor() {
    super();
    this.state = { value: 0, text: "s" };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    this.changeText(this.state.value);
  }
  onChange(value) {
    this.setState({ value });
    this.changeText(value);
    console.info(this.state.text);
  }

  changeText(value) {
    if (value === 0) {
      this.setState({
        text:
          "Apply to a United World College via the Palestinian National Committee",
      });
    } else if (value === 1) {
      this.setState({
        text: "Apply to be a Rhodes Scholar!",
      });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid
          item
          xs={12}
          className={classes.header}
          style={{ borderBottom: "solid", borderColor: "grey" }}
        >
          <div>
            <h1 item className={classes.title}>
              Begin your college adventure here!
            </h1>
            <h2 className={classes.subtitle}>
              <Link to="/Compare" className={classes.link}>
                Compare
              </Link>{" "}
              prospective college majors |{" "}
              <Link to="/Search" className={classes.link}>
                Search
              </Link>{" "}
              Palestine's catalog of majors
            </h2>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.slideshow}>
          <h3>Check out scholarships for Palestinians:</h3>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            justifySelf: "center",
            width: "100px",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexFlow: "row",
              alignContent: "center",
              textAlign: "center",
              backgroundColor: "aliceblue",
              alignItems: "center",
            }}
          >
            <Carousel
              arrows
              dots
              autoPlay={3000}
              value={this.state.value}
              onChange={this.onChange}
            >
              <img src={UWCImg} alt="" />
              <img src={RhodesImg} alt="" />
            </Carousel>
            <div style={{ padding: "20px" }}>{this.state.text}</div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
