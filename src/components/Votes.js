import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ServerError from "./404";

// MUI STUFF
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

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
  },
  button: {
    marginTop: 20
  }
}));

const Votes = ({ users, ques, match, authedUser }) => {
  const percentage = (first, second) => {
    return Math.floor((first / second) * 100);
  };

  const one = ques ? ques.optionOne.votes.length : <ServerError />;
  const two = ques ? ques.optionTwo.votes.length : <ServerError />;
  const allVotes = one + two;

  const percentOne = percentage(one, allVotes);
  const percentTwo = percentage(two, allVotes);

  const value1 = percentOne / 10;
  const value2 = percentTwo / 10;

  const classes = useStyles();

  return (
    <div>
      {ques ? (
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
            <Tooltip
              title={`${one} ${
                one > 1 ? "votes" : "vote"
              } ${percentOne} % all votes`}
              placement="right-end"
            >
              <Typography fontSize="h6.fontSize">
                {ques.optionOne.text}
                <br />
                <Rating
                  name="read-only"
                  value={value1}
                  readOnly
                  max={10}
                  precision={0.5}
                />
              </Typography>
            </Tooltip>
            <Tooltip
              title={`${two} ${
                two > 1 ? "votes" : "vote"
              } ${percentTwo} % of all votes`}
              placement="right-end"
            >
              <Typography fontSize="h6.fontSize">
                {ques.optionTwo.text}
                <br />
                <Rating
                  name="read-only"
                  value={value2}
                  readOnly
                  max={10}
                  precision={0.5}
                />
              </Typography>
            </Tooltip>
          </Card>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={Link}
            to="/pending"
          >
            Go Back
          </Button>
        </Box>
      ) : (
        <ServerError />
      )}
    </div>
  );
};

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;

  const ques = questions[id];
  return {
    users: Object.values(users),
    authedUser,
    ques
  };
}

export default connect(mapStateToProps)(Votes);
