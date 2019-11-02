import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    marginTop: 40
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Login = ({ login, users }) => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  const classes = useStyles();
  const [user, setUser] = useState("");
  const [updateUserId, setUpdateUserId] = useState("");

  const onChange = event => {
    setUser(event.target.value);
  };

  const onSubmit = event => {
    setUpdateUserId(user);
    {
      updateUserId ? login(updateUserId) : alert("required");
    }
    event.preventDefault();
  };
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Users
          </InputLabel>

          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={user}
            onChange={onChange}
            displayEmpty
            labelWidth={labelWidth}
          >
            {Object.keys(users).map(user => (
              <MenuItem value={user}>{users[user].name}</MenuItem>
            ))}
          </Select>
          <br />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: id => {
      dispatch(setAuthedUser(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
