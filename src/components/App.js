import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { initialData } from "../actions/shared";
import { recieveUsers } from "../actions/shared";
import PostQuestion from "./PostQuestion";
// import QuestionsList from "./QuestionsList";
// import WelcomeCard from "./WelcomeCard";
import "../App.css";
import Login from "./Login";
import Users from "./Users";
import Router from "./Router";

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
        <Router />

        {/* {authedUser === null ? (
          <Route exact path="/" component={WelcomeCard} />
        ) : (
          <Route to exact path="/cards" component={QuestionsList} />
        )} */}
        {/* <Login /> */}
        {/* <QuestionsList /> */}
        {/* <Users /> */}
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
