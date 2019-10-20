import React, { useEffect, Children } from "react";
import { connect } from "react-redux";
import recieveQuestions from "../actions/questions";
import { dispatch } from "C:/Users/paran/AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/range";
// import { question } from "../reducers/questionsReducer";
import { formatQuestion } from "../api/helper";

// MUI STUFF
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 545,
    minWidth: 350,
    margin: "auto",
    marginBottom: 10,
    marginTop: 25,
    objectFit: "cover",
    paddingBottom: 0
  },
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },

  control: {
    padding: theme.spacing(2)
  },
  media: {
    height: 0,
    objectFit: "cover",
    paddingTop: "56.25%" // 16:9
  }
}));

const Question = props => {
  const classes = useStyles();
  const { question } = props;
  const { id, optionOne, optionTwo, hasVoted, author, avatar } = question;
  console.log("bbbb", props);

  useEffect(() => {
    props.dispatch(recieveQuestions());
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={id}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            Option One
          </Typography>
          {optionOne.text}
          <br />
          <br />
          {/* {optionOne.votes}
      <br /> */}
          <Typography variant="body2" color="textSecondary" component="p">
            Option Two
          </Typography>
          {optionTwo.text}
          {avatar}
          <br />
          <br />
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
          {/* {optionTwo.votes}
      <br /> */}
          {/* <img src={id} /> */}
        </Card>
      </Grid>
    </Grid>
  );
};

function mapStateToProps({ authedUser, users, question }, { id }) {
  const questions = question[id];

  return {
    authedUser,
    users,
    question
    //Before
    // question: Object.keys(users),

    // After
    // question: formatQuestion(questions, users[questions.author], authedUser)
  };
}

export default connect(mapStateToProps)(Question);
