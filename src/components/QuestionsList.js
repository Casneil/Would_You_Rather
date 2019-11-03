import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Link } from "react-router-dom";

// Material UI
import { Tooltip } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  control: {
    padding: theme.spacing(2)
  },
  fab: {
    margin: theme.spacing(1),
    float: "right"
  }
}));

const QuestionsList = props => {
  const { questionID, users } = props;
  console.log(props);

  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Add a question">
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          component={Link}
          to="/post"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Grid Grid container className={classes.root}>
        {questionID.map(id => (
          <Grid>
            <h3 key={id}>
              <Question id={id} />
            </h3>
          </Grid>
        ))}
      </Grid>
    </div>
    // </Card>
    // </Grid>
  );
};

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questionID: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    users: Object.values(users)
  };
}

export default connect(mapStateToProps)(QuestionsList);
