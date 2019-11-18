import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { deleteAuthedUser } from "../actions/authedUser";

const Logout = ({ dispatch }) => {
  useEffect(() => {
    dispatch(deleteAuthedUser());
  }, []);
  return <Redirect to="/" />;
};

export default connect()(Logout);
