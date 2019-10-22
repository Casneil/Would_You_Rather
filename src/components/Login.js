import React, { Fragment, useEffect, useState } from "react";

import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
// import User from "./User";

const Login = props => {
  const [user, setUser] = useState(" ");
  const [updateUser, setUpdateUser] = useState([]);

  const onChange = value => {
    setUser(value);
  };

  const handleChange = e => {
    e.preventDefault();
    setUpdateUser(user);
    const authedUser = updateUser;
  };

  useEffect(() => {
    // Before
    // props.dispatch(Authed_User(false));

    //After
    props.dispatch(setAuthedUser(true));
  }, []);

  const { userIds, loading } = props;
  //After
  const { users } = props;

  return (
    <div>
      {Object.keys(users).map(user => {
        return (
          <option key={users[user]} value={users[user]}>
            {users[user].name}
          </option>
        );
      })}
      <img src={users.avatarURL} />
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Login);
