import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initialData } from "../actions/shared";
import Router from "./Router";
import "../App.css";

//MUI Imports
import LoadingBar from "./Loading";
import Navbar from "./Navbar";

const App = props => {
  useEffect(() => {
    props.initialData();
  }, []);
  const { authedUser, users } = props;

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Router loginUser={authedUser} />
        {/* <Login /> */}
      </div>
    </BrowserRouter>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initialData: () => {
      dispatch(initialData());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// Add uctionality to Add new users and users photo
