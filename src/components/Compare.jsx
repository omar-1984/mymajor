import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { db } from "../services/firebase1.js";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  createMuiTheme,
  MuiThemeProvider,
  CircularProgress,
  Grid,
} from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#61dafb",
      contrastText: "white",
      icon: "white",
    },
    icon: {
      color: "white",
    },
    secondary: {
      main: "#61dafb",
    },
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#2E3B55",
    color: "white",
  },
  body: {
    fontSize: 13,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function createData(name, CS, CE, IT) {
  return { name, CS, CE, IT };
}
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    padding: "20px",
  },
  loading: {
    display: "flex",
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-50px",
    marginLeft: "-100px",
  },
});
export default function CustomizedTables() {
  const classes = useStyles();
  const [majors, setMajors] = useState(null);
  const [major1, setMajor1] = useState("");
  const [major2, setMajor2] = useState("");
  const [major3, setMajor3] = useState("");
  const [dataReturned, setDataReturned] = useState(false);
  // const [rows, setrows] = useState([]);
  var MajorsByName = new Object();

  useEffect(() => {
    console.log("hi");
    db.firestore()
      .collection("majors")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // var dic = doc.data();

          MajorsByName[doc.data().name] = doc.data();
          // console.log(MajorsByName[doc.data().name]["average"]);
          // console.log(doc.data().name);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const handleChange1 = (event) => {
    setMajor1(event.target.value);
    console.log(major1);
    console.log("this is 1");
    // createrows();
  };
  const handleChange2 = (event) => {
    setMajor2(event.target.value);
    console.log(major2);
    // createrows();
  };
  const handleChange3 = (event) => {
    // console.log(MajorsByName["Computer Engineering"]["average]);
    setMajor3(event.target.value);
    console.log(major3);
    // createrows();
  };

  const rows = [
    createData("Average", "80% or more", "80% or more", "65% or more", 4.0),
    createData(
      "Branch",
      "Scientific and industrial",
      "Scientific and industrial",
      "Scientific and industrial",
      4.3
    ),
    createData(
      "The number of years",
      "4 years",
      "3 or 4 years",
      "From 3.5 to 5 years",
      6.0
    ),
    createData(
      "The number of hours",
      "128 hours",
      "161 hours",
      "129 hours",
      "161 hours",
      4.3
    ),
    createData(
      "The price of hours ",
      "43 Jordanian dinars",
      "38 Jordanian dinars",
      "15 Jordanian dinars",
      3.9
    ),
    createData(
      "The unemployment",
      "43% for males and 75% for females",
      "83%",
      "79.6%",
      3.9
    ),
    createData(
      "Materials ",
      "Mathematics, programming and technology ",
      "Mathematics, programming and technology",
      "Mathematics, electronics, electronics maintenance and programming",
      3.9
    ),
  ];

  return (
    <MuiThemeProvider theme={theme}>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Majors</StyledTableCell>
              <StyledTableCell align="left">
                <FormControl className={classes.formControl}>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "#61dafb" }}></InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{ color: "white" }}
                    color="primary"
                    value="Computer Science"
                    onChange={handleChange1}>
                    <MenuItem value="Computer Science">
                      Computer Science
                    </MenuItem>
                    <MenuItem value="Computer Engineering">
                      Computer Engineering
                    </MenuItem>
                    <MenuItem value="IT">Information Technology</MenuItem>
                  </Select>
                </FormControl>
              </StyledTableCell>
              <StyledTableCell align="left">
                <FormControl className={classes.formControl}>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "#61dafb" }}></InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{ color: "white" }}
                    color="primary"
                    value="Computer Engineering"
                    onChange={handleChange2}>
                    <MenuItem value="Computer Science">
                      Computer Science
                    </MenuItem>
                    <MenuItem value="Computer Engineering">
                      Computer Engineering
                    </MenuItem>
                    <MenuItem value="IT">Information Technology</MenuItem>
                  </Select>
                </FormControl>
              </StyledTableCell>
              <StyledTableCell align="left">
                <FormControl className={classes.formControl}>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "#61dafb" }}></InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{ color: "white" }}
                    color="primary"
                    value="IT"
                    onChange={handleChange3}>
                    <MenuItem value="Computer Science">
                      Computer Science
                    </MenuItem>
                    <MenuItem value="Computer Engineering">
                      Computer Engineering
                    </MenuItem>
                    <MenuItem value="IT">Information Technology</MenuItem>
                  </Select>
                </FormControl>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.CS}</StyledTableCell>
                <StyledTableCell align="left">{row.CE}</StyledTableCell>
                <StyledTableCell align="left">{row.IT}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MuiThemeProvider>
  );
}
