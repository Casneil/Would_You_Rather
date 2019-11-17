import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { recieveQuestions } from "../actions/questions";
import { handleAnswer } from "../actions/shared";
import { withRouter, Redirect, Link } from "react-router-dom";

// MUI Imports
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  rating1: {
    width: 200,
    display: "flex",
    alignItems: "center"
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  card: {
    maxWidth: 545,
    minWidth: "auto",
    margin: "auto",
    marginTop: 40,
    objectFit: "cover",
    paddingBottom: 0
  },
  img: {
    height: "5%",
    margin: 0
    // borderRadius: "100%"
  }
}));

const Votes = ({ users, qs, authedUser, ques, choice, match }) => {
  let vt;
  console.log("IIIIIIIDDDDD", match);
  const votes = qs.map(vote => {
    vt = vote;
  });

  const percentage = (first, second) => {
    return Math.floor((first / second) * 100);
  };

  const one = vt.optionOne.votes.length;
  const two = vt.optionTwo.votes.length;
  const allVotes = one + two;

  const percentOne = percentage(one, allVotes);
  const percentTwo = percentage(two, allVotes);

  const value1 = percentOne / 10;
  const value2 = percentTwo / 10;

  const classes = useStyles();

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.img}
              component="img"
              alt="author"
              height="140"
              title={ques.author}
              image={users.find(user => user.id === ques.author).avatarURL}
            />

            <CardContent></CardContent>
          </CardActionArea>
          <Tooltip title={`${percentOne} % all votes`} placement="right-end">
            <Typography fontSize="h6.fontSize">
              {ques.optionOne.text}
              <br />
              <Rating name="read-only" value={value1} readOnly />
            </Typography>
          </Tooltip>
          <Tooltip title={`${percentTwo} % all votes`} placement="right-end">
            <Typography fontSize="h6.fontSize">
              {ques.optionTwo.text}
              <br />
              <Rating name="read-only" value={value2} readOnly />
            </Typography>
          </Tooltip>
        </Card>
      </Box>
    </div>
  );
};

function mapStateToProps({ authedUser, users, questions }, props) {
  // const user = users[authedUser];
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
    choice
  };
}

export default connect(mapStateToProps)(Votes);
