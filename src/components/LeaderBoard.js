import React, { Fragment } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: value => value.toFixed(2)
  }
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  }
});

const LeaderBoard = props => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { users } = props;
  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "previous page"
        }}
        nextIconButtonProps={{
          "aria-label": "next page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
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

//OLD
// import React, { Fragment } from "react";
// import { connect } from "react-redux";

// function LeaderBoard(props) {
//   const { users } = props;
//   return (
//     <Fragment>
//       <thead>
//         <tr>
//           <th>Rank</th>
//           <th>Profile</th>
//           <th>User</th>
//           <th>Questions Asked</th>
//           <th>Questions Answered</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user, index) => (
//           <tr key={user.id}>
//             <td>{index + 1}</td>
//             <td>
//               <img src={user.avatarURL} alt={`${user.name}`} />
//             </td>
//             <td>{user.name}</td>
//             <td>{user.questions.length}</td>
//             <td>{Object.keys(user.answers).length}</td>
//           </tr>
//         ))}
//       </tbody>
//     </Fragment>
//   );
// }

// const mapStateToProps = ({ users }) => {
//   const scores = user =>
//     Object.keys(user.answers).length + user.questions.length;
//   return {
//     users: Object.values(users).sort((a, b) => scores(b) - scores(a))
//   };
// };

// export default connect(mapStateToProps)(LeaderBoard);
