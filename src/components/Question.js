import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { recieveQuestions } from "../actions/questions";
import { recieveUsers } from "../actions/users";
import { handleAnswer } from "../actions/shared";
import Loading from "./Loading";

// import { question } from "../reducers/questionsReducer";
import { formatQuestion } from "../api/helper";

// MUI STUFF
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Tooltip } from "@material-ui/core";

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
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Question = ({
  qs,
  users,
  authedUser,
  dispatch,
  Answered,
  Pending,
  saveQuestionAnswer,
  Users,
  Questions,
  postAnswer
}) => {
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();
  // const { qs, users, authedUser, unAnswered, answered } = props;

  // Switch Component States
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false
  });
  // Switch Component Change Function
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    setSelected(event.target.value);
  };
  console.log(selected);

  const onSubmit = event => {
    event.preventDefault();
    try {
      postAnswer(qs, selected);
      // dispatch(handleAnswer(qs.id, selected));
      setSelected("");
      setRedirect(true);
    } catch (err) {
      console.error(err);
    }

    // dispatch(saveQuestionAnswer);
    // dispatch(handleAnswer(qs.id, selected));
    // setVote(event.target.value);
    // console.log(vote);
  };

  // console.log("GGGGGGGGGGGGGGGGGGGG", qs, users, dispatch, authedUser);

  useEffect(() => {
    setLoading(true);
    Users();
    Questions();
    setLoading(false);
  }, []);
  if (loading) {
    return <Loading />;
  }

  if (redirect) {
    return <Redirect to="/questions" />;
  }

  if (Answered) {
    return (
      <div>
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
              <Typography gutterBottom variant="h5" component="h2">
                {qs.author}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            {qs.optionOne.text}
          </Typography>

          {/* {qs.optionOne.votes} */}

          <Typography variant="body2" color="textSecondary" component="p">
            {qs.optionTwo.text}
          </Typography>
          <br />
        </Card>
      </div>
    );
  }

  return (
    // <Grid container className={classes.root}>
    //   <Grid>
    <div>
      <form onSubmit={onSubmit}>
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
              <Typography gutterBottom variant="h5" component="h2">
                {qs.author}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            <Tooltip title="Option One" placement="right-end">
              {state.checkedB === true ? (
                <Switch
                  checked={state.checkedA}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              ) : (
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange("checkedA")}
                  value={qs.optionOne.text}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              )}
            </Tooltip>
          </Typography>
          {qs.optionOne.text}

          {/* {qs.optionOne.votes} */}

          <Typography variant="body2" color="textSecondary" component="p">
            <Tooltip title="Option Two" placement="right-end">
              {state.checkedA === true ? (
                <Switch
                  checked={state.checkedB}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              ) : (
                <Switch
                  checked={state.checkedB}
                  onChange={handleChange("checkedB")}
                  value={qs.optionTwo.text}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              )}
            </Tooltip>
          </Typography>
          {qs.optionTwo.text}
          <br />
          <br />
          {state.checkedA || state.checkedB === true ? (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Submit
            </Button>
          ) : (
            <></>
          )}
        </Card>
      </form>
    </div>

    //   </Grid>
    // </Grid>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    postAnswer: (id, option) => {
      dispatch(handleAnswer(id, option));
    },
    Users: () => {
      dispatch(recieveUsers());
    },

    Questions: () => {
      dispatch(recieveQuestions());
    }
  };
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
