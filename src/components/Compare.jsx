import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { db } from "../services/firebase.js";
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

function createData(name, first, second, third) {
  return { name, first, second, third };
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

  useEffect(() => {
    let majorsList = [];
    const subscriber = db
      .firestore()
      .collection("majors")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          majorsList.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setMajors(majorsList);
        setDataReturned(true);
        console.info(majors);
      });
    return () => subscriber();
  }, [majors, major1, major2, major3]);

  const handleChange1 = (event) => {
    setMajor1({ major1: event.target.value });
    console.info(major1);
  };
  const handleChange2 = (event) => {
    setMajor2({ major2: event.target.value });
    console.info(major3);
  };
  const handleChange3 = (event) => {
    setMajor3({ major3: event.target.value });
    console.info(major3);
  };

  if (dataReturned === true) {
    const rows = [
      createData("Average", majors[0].average, 9.0, 37, 4.3),
      createData("Employment Rate", majors[0].unemployment, 16.0, 24, 6.0),
      createData("Years", majors[0].years, 3.7, 67, 4.3),
      createData("Credit Hours", majors[0]["credit hours"], 16.0, 49, 3.9),
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
                      style={{ color: "#61dafb" }}
                    ></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      style={{ color: "white" }}
                      color="primary"
                      value=""
                      onChange={handleChange1}
                    >
                      <MenuItem value="Computer Science">
                        Computer Science
                      </MenuItem>
                      <MenuItem value="CE">Computer Engineering</MenuItem>
                      <MenuItem value="IT">Information Technology</MenuItem>
                    </Select>
                  </FormControl>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ color: "#61dafb" }}
                    ></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      style={{ color: "white" }}
                      color="primary"
                      value=""
                      onChange={handleChange2}
                    >
                      <MenuItem value="CS">Computer Science</MenuItem>
                      <MenuItem value="CE">Computer Engineering</MenuItem>
                      <MenuItem value="IT">Information Technology</MenuItem>
                    </Select>
                  </FormControl>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ color: "#61dafb" }}
                    ></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      style={{ color: "white" }}
                      color="primary"
                      value=""
                      onChange={handleChange3}
                    >
                      <MenuItem value="CS">Computer Science</MenuItem>
                      <MenuItem value="CE">Computer Engineering</MenuItem>
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
                  <StyledTableCell align="left">{row.first}</StyledTableCell>
                  <StyledTableCell align="left">{row.second}</StyledTableCell>
                  <StyledTableCell align="left">{row.third}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MuiThemeProvider>
    );
  } else {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }
}
