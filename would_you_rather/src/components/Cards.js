import React from "react";
import { connect } from "react-redux";
import Questions from "./Questions";

const Cards = props => {
  console.log(props);
  return (
    <div>
      {props.questionID.map(id => (
        // <Grid>
        <h3 key={id}>
          <Questions id={id} />
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

export default connect(mapStateToProps)(Cards);
