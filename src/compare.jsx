import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "black",
    color: "white"
  },
  body: {
    fontSize: 13
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(name, CS, IT, CE) {
  return { name, CS, IT, CE };
}

const rows = [
  createData("CS", "ghgh", 5, 24, 4.0),
  createData("Average", "ghgh", 9.0, 37, 4.3),
  createData("offer", "ghgh", 16.0, 24, 6.0),
  createData("University", "ghgh", 3.7, 67, 4.3),
  createData("llllll", "ghgh", 16.0, 49, 3.9)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Magors</StyledTableCell>
            <StyledTableCell align="left">CS</StyledTableCell>
            <StyledTableCell align="left">IT</StyledTableCell>
            <StyledTableCell align="left">CE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.CS}</StyledTableCell>
              <StyledTableCell align="left">{row.IT}</StyledTableCell>
              <StyledTableCell align="left">{row.CE}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <label for="Magors">Choose a Magor:</label>
      <select name="Magors" id="Megors">
        <option value="cs">computer science</option>
        <option value="it">it</option>
        <option value="ce">computer engineering</option>
        <option value="eng">engineering</option>
      </select>
    </TableContainer>
  );
}
