import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
    marginTop: 40
  },
  table: {
    minWidth: 500
  },
  img: {
    height: 80,
    margin: 2
  }
});

const LeaderBoard = ({ users }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="auto">Name</TableCell>
            <TableCell align="center">Questions</TableCell>
            <TableCell align="center">Answered</TableCell>
            <TableCell align="center">Rank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, rank) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <img src={row.avatarURL} alt={row.id} className={classes.img} />
                {row.name}
              </TableCell>
              <TableCell align="center">{row.questions.length}</TableCell>
              <TableCell align="center">
                {Object.keys(row.answers).length}
              </TableCell>
              <TableCell align="center">{rank + 1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = ({ users }) => {
  const scores = user =>
    Object.keys(user.answers).length + user.questions.length;
  return {
    users: Object.values(users).sort((a, b) => scores(b) - scores(a))
  };
};

export default connect(mapStateToProps)(LeaderBoard);
