import React, { Fragment } from "react";
import { connect } from "react-redux";

const User = props => {
  const { users } = props;
  return (
    <Fragment>
      {users.map(user => (
        <div>
          <img
            src={user.avatarURL}
            className="avatar"
            alt={`Avatar of ${user.name}`}
          />
          <span>{user.name}</span>
        </div>
      ))}
    </Fragment>
  );
};

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

export default connect(mapStateToProps)(User);
