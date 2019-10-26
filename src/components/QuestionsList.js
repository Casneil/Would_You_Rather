import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

const QuestionsList = props => {
  // console.log(" bbbbb", props);
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

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questionID: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(QuestionsList);
