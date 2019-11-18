import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initialData } from "../actions/shared";
import Router from "./Router";
import "../App.css";

//MUI Imports
import Navbar from "./Navbar";

const App = ({ authedUser, initialData }) => {
  useEffect(() => {
    initialData();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Router loginUser={authedUser} />
      </div>
    </BrowserRouter>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initialData: () => {
      dispatch(initialData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
