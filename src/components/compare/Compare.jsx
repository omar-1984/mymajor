import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
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

const rows = [
  createData("Average", "80% or more", "80% or more","65% or more" , 4.0),
  createData("Branch", "Scientific and industrial","Scientific and industrial","Scientific and industrial", 4.3),
  createData("The number of years", "4 years", "3 or 4 years","From 3.5 to 5 years", 6.0),
  createData("The number of hours", "128 hours","161 hours","129 hours","161 hours", 4.3),
  createData("The price of hours ", "43 Jordanian dinars", "38 Jordanian dinars",  "15 Jordanian dinars", 3.9),
  createData("The unemployment", "43% for males and 75% for females","83%","79.6", 3.9),
  createData("Materials ", "Mathematics, programming and technology ", "Mathematics, programming and technology", "Mathematics, electronics, electronics maintenance and programming", 3.9)
];

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  container: {
    padding: "20px",
    width: "96%",
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Magors</StyledTableCell>
            <StyledTableCell align="center">CS</StyledTableCell>
            <StyledTableCell align="center">CE</StyledTableCell>
            <StyledTableCell align="center">IT</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.CS}</StyledTableCell>
              <StyledTableCell align="center">{row.CE}</StyledTableCell>
              <StyledTableCell align="center">{row.IT}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
