import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect, withRouter } from "react-router-dom";
import Cover from "../images/cover.jpg";
import Loading from "./Loading";

// MUI STUFF
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
  },
  img: {
    height: 80,
    margin: 2
  },
  cover: {
    marginTop: "6vh",
    maxWidth: "100%",
    height: "auto"
  }
}));

const Login = ({ login, users, authedUser, location }) => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  const classes = useStyles();
  const [user, setUser] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    {
      user && login(user);
    }
  };

  const onChange = event => {
    setUser(event.target.value);
  };

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  if (authedUser) {
    let url =
      location.state && location.state.from ? location.state.from : "/pending";
    return <Redirect to={url} />;
  }
  return (
    <div>
      <img src={Cover} className={classes.cover} alt="casneil's avatar" />
      <form onSubmit={onSubmit}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            User required*
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
              <MenuItem key={users[user].id} value={user}>
                <img
                  src={users[user].avatarURL}
                  className={classes.img}
                  alt="user's avatar"
                />
                {users[user].name}
              </MenuItem>
            ))}
          </Select>
          <br />
          {user === "" ? (
            <Button variant="contained" disabled>
              Submit
            </Button>
          ) : (
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          )}
        </FormControl>
      </form>
    </div>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: id => {
      dispatch(setAuthedUser(id));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
