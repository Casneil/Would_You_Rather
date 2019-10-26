import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
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
  }
}));

const QuestionsList = props => {
  const classes = useStyles();
  // console.log(" bbbbb", props);

  return (
    <div>
      <Grid Grid container className={classes.root}>
        {props.questionID.map(id => (
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
    )
  };
}

export default connect(mapStateToProps)(QuestionsList);
