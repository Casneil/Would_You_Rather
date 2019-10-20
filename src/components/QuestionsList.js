import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

const QuestionsList = props => {
  console.log(" bbbbb", props);
  return (
    <div>
      {props.questionID.map(id => (
        // <Grid>
        <h3 key={id}>
          <Question id={id} />
        </h3>
        /* </Grid> */
      ))}
    </div>
    // </Card>
    // </Grid>
  );
};

function mapStateToProps({ question, users, authedUser }) {
  return {
    questionID: Object.keys(question).sort(
      (a, b) => question[b].timestamp - question[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(QuestionsList);
