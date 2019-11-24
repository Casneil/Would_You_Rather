import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { AddQuestion } from "../actions/shared";
import QuestionsPic from "../images/quesPic.jpg";
import Loading from "./Loading";

// MUI STUFF
import { Tooltip } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 380
  },
  button: {
    margin: theme.spacing(1)
  },
  cover: {
    marginTop: "6vh",
    maxWidth: "100%",
    height: "auto"
  }
}));

const PostQuestion = ({ postQuestion }) => {
  const classes = useStyles();
  const [optionOneText, setOptionOne] = useState("");
  const [optionTwoText, setOptionTwo] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [load, setLoad] = useState(false);

  const optionOneChange = event => {
    event.preventDefault();
    setOptionOne(event.target.value);
  };

  const optionTwoChange = event => {
    event.preventDefault();
    setOptionTwo(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();

    postQuestion(optionOneText, optionTwoText);
    //Clear text field after Submition
    setOptionOne("");
    setOptionTwo("");
    setLoad(true);
    setRedirect(true);
    setLoad(false);
  };

  if (load) {
    return <Loading />;
  }

  if (redirect) {
    return <Redirect to="/pending" />;
  }

  return (
    <div>
      <div>
        <img src={QuestionsPic} alt="QuesPic" className={classes.cover} />
        <form onSubmit={onSubmit}>
          <h1 className="option1">Would You Rather</h1>
          <Tooltip title="Option 1 " placement="right-end">
            <TextField
              required
              id="filled-required"
              label="Text 1 Required"
              multiline
              rowsMax="4"
              defaultValue={optionOneText}
              onChange={optionOneChange}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Tooltip>
          <h3 className="or">Or</h3>
          <h1 className="option2">Would You Rather</h1>
          <Tooltip title="Option 2 " placement="right-end">
            <TextField
              required
              id="filled-required"
              label="Text 2 Required"
              multiline
              rowsMax="4"
              defaultValue={optionTwoText}
              onChange={optionTwoChange}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Tooltip>
          <div>
            {optionOneText.trim() === "" || optionTwoText.trim() === "" ? (
              <></>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    postQuestion: (optionOne, optionTwo) => {
      dispatch(AddQuestion(optionOne, optionTwo));
    }
  };
}

export default withRouter(connect(null, mapDispatchToProps)(PostQuestion));
