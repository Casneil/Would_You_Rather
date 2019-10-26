import React, { Fragment } from "react";
import { connect } from "react-redux";

const User = props => {
  const { user } = props;
  //   console.log("NNNEEEEEEEW!", props);

  return (
    <Fragment>
      <img
        src={user.avatarURL}
        className="avatar"
        alt={`Avatar of ${user.name}`}
      />
      <span>{user.name}</span>
    </Fragment>
  );
};

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  };
}

export default connect(mapStateToProps)(User);
