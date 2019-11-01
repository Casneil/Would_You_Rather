import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
// import User from "./User";

import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { object } from "prop-types";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}));

const Login = props => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [updateUser, setUpdateUser] = useState("");
  // const [value, setValue] = useState(" Sarah Edo");

  //From material UI Radio
  // const handleChange = event => {
  //   setValue(event.target.value);
  //   console.log(value);
  // };

  const onChange = event => {
    setUser(event.target.value);
    console.log("UUSER", user);
  };

  const onSubmit = event => {
    event.preventDefault();
    setUpdateUser(user);
    console.log("Clicked", updateUser);
    // const authedUser = updateUser;
  };

  // useEffect(() => {
  //   // Before
  //   // props.dispatch(Authed_User(false));

  //   //After
  //   props.dispatch(setAuthedUser(updateUser));
  //   console.log("UPdateSER", updateUser);
  // }, []);

  const { userIds, loading } = props;
  //After
  const { users } = props;

  return (
    // <form onSubmit={onSubmit}>
    //   <div>
    //     {Object.keys(users).map(user => {
    //       return (
    //         <option key={users[user]} value={users[user]}>
    //           {users[user].name}
    //         </option>
    //       );
    //     })}
    //     <img src={users.avatarURL} />
    //   </div>
    //   <button>Submit</button>
    // </form>
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Login In</FormLabel>
        {Object.keys(users).map(user => {
          return (
            <RadioGroup
              aria-label="user"
              name="user"
              user={user}
              onChange={onChange}
            >
              <FormControlLabel
                value={updateUser}
                control={<Radio />}
                label={users[user].name}
              />

              {/* <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                      label="(Disabled option)" */}
            </RadioGroup>
          );
        })}
      </FormControl>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Login);
