import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { recieveQuestions } from "../actions/questions";

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

const Votes = ({ users, qs, authedUser }) => {
  let vt;
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

  //   const e = vote;
  //   useEffect(() => {
  //     Questions();
  //   }, []);

  let one = vt.optionOne.votes.length;
  let two = vt.optionTwo.votes.length;

  const percentage = (first, second) => {
    return Math.floor((first / second) * 100);
  };
  const allVotesPercent = percentage(one, two);

  console.log("AAAAAL VOOOTes:", allVotesPercent);
  const value = 2;

  const classes = useStyles();

  return (
    <div className={classes.rating}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Ratings</Typography>

        <div>{users.find(user => user.id === vt.author).avatarURL}</div>

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

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const user = users[authedUser];
  const qs = Object.values(questions);

  //   const answered = Object.keys(user.answers).sort(
  //     (a, b) => questions[b].timestamp - questions[a].timestamp
  //   );

  return {
    // answered,
    users: Object.values(users),
    authedUser,
    qs
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     Questions: () => {
//       dispatch(recieveQuestions());
//     }
//   };
// }

export default connect(mapStateToProps)(Votes);
