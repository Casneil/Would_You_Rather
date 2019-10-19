import React, { Fragment, useEffect, useState } from "react";

import { connect } from "react-redux";
import { Authed_User, authedUser } from "../actions/authedUser";
// import User from "./User";

const Login = props => {
  const [user, setUser] = useState(" ");
  const [updateUser, setUpdateUser] = useState([]);

  // const onChange = value => {
  //   setUser(value);
  // };

  // const handleChange = e => {
  //   e.preventDefault();
  //   setUpdateUser(user);
  //   const authedUser = updateUser;
  // };

  useEffect(() => {
    // Before
    // props.dispatch(Authed_User(false));

    //After
    props.dispatch(authedUser(true));
  }, []);

  const { userIds, loading } = props;
  //After
  const { users, author } = props;
  {
    console.log(users, author);
  }

  return (
    <div>
      {/* {Object.keys(users).map(user => {
        return (
          <option key={users[user]} value={users[user]}>
            {users[user].name}
          </option>
        );
      })} */}
    </div>
  );
  {
    /* <h2>Who are you?</h2>
      {userIds.map(id => (
        <div key={id}>
          <User id={id} loading={loading} />
        </div>
      ))} */
  }
};

function mapStateToProps(users) {
  return {
    // userIds: Object.keys(users),
    users
  };
}

export default connect(mapStateToProps)(Login);
