import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { recieveQuestions } from "../actions/questions";
import { handleAnswer } from "../actions/shared";
import { withRouter, Redirect } from "react-router-dom";

// MUI Imports
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};

const useStyles = makeStyles({
  rating1: {
    width: 200,
    display: "flex",
    alignItems: "center"
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

// image={users.find(user => user.id === qs.author).avatarURL}

const Votes = ({ users, qs, authedUser, ques, choice, match }) => {
  let vt;
  let id;
  console.log("IIIIIIIDDDDD", match);
  const votes = qs.map(vote => {
    vt = vote;
    // console.log(vt);
    // const two = vote.optionTwo.votes;
    // const one = vote.optionOne.votes;
    // return {
    //   one,
    //   two
    // };
  });
  // const ids = ques.map(q => {
  //   id = q.id;
  // });

  //   const e = vote;
  //   useEffect(() => {
  //     Questions();
  //   }, []);

  const percentage = (first, second) => {
    return Math.floor((first / second) * 100);
  };

  const one = vt.optionOne.votes.length;
  const two = vt.optionTwo.votes.length;
  const allVotes = one + two;

  const percentOne = percentage(one, allVotes);
  const percentTwo = percentage(two, allVotes);

  // console.log("AAAAAL VOOOTes:", percentOne, percentTwo, "SElected: ", id);
  const value = 2;

  const classes = useStyles();

  return (
    <div className={classes.rating}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">
          Ratings:{ques.optionOne.votes}
        </Typography>
        // Need to find just the user of the questin not the user who answered
        the questions
        {/* <div>{users.find(user => user.id === vt.author).avatarURL}</div> */}
        {/* <div>
          <h1>{users.find(ques => authedUser === users).answers}</h1>
        </div> */}
        {/* {users.map((user) => (
          <div>
            <Avatar
              alt="Remy Sharp"
              src={user.avatarURL}
              className={classes.bigAvatar}
            />
            {user.name}
            <Rating name="read-only" value={value} readOnly />
          </div>
        ))} */}
      </Box>
    </div>
  );
};

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <Tooltip title={labels[value] || ""}>
      <span {...other} />
    </Tooltip>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired
};

function mapStateToProps({ authedUser, users, questions }, props) {
  const user = users[authedUser];
  const { id } = props.match.params;
  const qs = Object.values(questions);
  let choice = questions[id];
  const ques = questions[id];
  //   let author = "";
  //   author = users[choice["author"]];

  //   const answered = Object.keys(user.answers).sort(
  //     (a, b) => questions[b].timestamp - questions[a].timestamp
  //   );

  return {
    // answered,
    users: Object.values(users),
    authedUser,
    qs,
    ques,
    // ques: questions[id.match.params.id],
    choice
  };
}

// function mapDispatchToProps(dispatch, props) {
//   const { id } = props.match.params;
//   return {
//     postAnswer: (id, choice) => {
//       dispatch(handleAnswer(id, choice));
//     }
//   };
// }

export default connect(mapStateToProps)(Votes);
