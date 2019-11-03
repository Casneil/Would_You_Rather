import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { recieveQuestions } from "../actions/questions";
import { recieveUsers } from "../actions/users";
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
    marginTop: 40,
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
    height: "12%",
    objectFit: "cover"
    // paddingTop: "56.25%" // 16:9
  },
  img: {
    height: "5%",
    margin: 0
    // borderRadius: "100%"
  }
}));

const Question = props => {
  const classes = useStyles();
  const { qs, users, authedUser } = props;

  console.log("GGGGGGGGGGGGGGGGGGGG", props);

  useEffect(() => {
    props.dispatch(recieveQuestions());
    props.dispatch(recieveUsers());
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.img}
              component="img"
              alt="author"
              height="140"
              title={qs.author}
              image={users.find(user => user.id === qs.author).avatarURL}
            />

            <CardContent>
              {/* <img src={users[0].avatarURL} /> */}
              <Typography gutterBottom variant="h5" component="h2">
                {qs.author}
                {/* {avtr.avatarURL} */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            Option One
          </Typography>
          {qs.optionOne.text}
          <br />
          {/* {qs.optionOne.votes} */}
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            Option Two
          </Typography>
          {qs.optionTwo.text}
          <br />
          <br />
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const qs = questions[id];

  return {
    qs,
    users: Object.values(users),
    authedUser

    //Before
    // question: Object.keys(users),

    // After
    // question: formatQuestion(questions, users[questions.author], authedUser)
  };
}

export default withRouter(connect(mapStateToProps)(Question));
