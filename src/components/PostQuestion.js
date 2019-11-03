import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { handleAddQuestion } from "../actions/shared";

// Material UI
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
  }
}));

const PostQuestion = props => {
  const { postQuestion } = props;
  const classes = useStyles();
  const [optionOneText, setOptionOne] = useState("");
  const [optionTwoText, setOptionTwo] = useState("");

  const handleOptionOneChange = event => {
    event.preventDefault();
    setOptionOne({
      optionOneText: event.target.value
    });
    // console.log(optionOne);
  };

  const handleOptionTwoChange = event => {
    event.preventDefault();
    setOptionTwo({
      optionTwoText: event.target.value
    });
    // console.log(optionTwo);
  };
  const handleSubmit = event => {
    event.preventDefault();

    // const { optionOne, optionTwo } = "";
    postQuestion(optionOneText, optionTwoText);
    //Clear text field after Submition
    setOptionOne("");
    setOptionTwo("");
  };

  // s
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className="option1">Would You Rather</h1>
          <Tooltip title="Option 1 " placement="right-end">
            <TextField
              required
              id="filled-required"
              label="Text 1 Required"
              multiline
              rowsMax="4"
              defaultValue={optionOneText}
              onChange={handleOptionOneChange}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Tooltip>
          <h3 className="or">Or</h3>
          <h1 className="option1">Would You Rather</h1>
          <Tooltip title="Option 2 " placement="right-end">
            <TextField
              required
              id="filled-required"
              label="Text 2 Required"
              multiline
              rowsMax="4"
              defaultValue={optionTwoText}
              onChange={handleOptionTwoChange}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Tooltip>
          <div>
            {optionOneText === "" || optionTwoText === "" ? (
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
      dispatch(handleAddQuestion(optionOne, optionTwo));
    }
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(PostQuestion)
);
