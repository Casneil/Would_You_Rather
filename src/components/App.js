import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { initialData } from "../actions/shared";
import { recieveUsers } from "../actions/shared";
import QuestionsList from "./QuestionsList";
import WelcomeCard from "./WelcomeCard";
import "../App.css";
import Login from "./Login";

//MUI Imports
import LoadingBar from "./Loading";
import Navbar from "./Navbar";

const App = props => {
  const { authedUser, users } = props;
  console.log("AAAAAAPPPPP", props);

  useEffect(() => {
    props.dispatch(initialData());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {authedUser === null ? (
          <Route exact path="/" component={WelcomeCard} />
        ) : (
          <Route to exact path="/cards" component={QuestionsList} />
        )}
        <Login />
        {/* <QuestionsList /> */}
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

export default connect(mapStateToProps)(App);

// Add uctionality to Add new users and users photo
