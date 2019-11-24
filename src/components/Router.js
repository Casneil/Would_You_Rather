import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import QuestionList from "./QuestionsList";
import WelcomeCard from "./WelcomeCard";
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";
import ServerError from "./404";
import PostQuestion from "./PostQuestion";
import Logout from "./Logout";
import Votes from "./Votes";
import PrivateRoute from "./PrivateRoutes";

const Router = ({ authedUser, users }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomeCard} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/pending" component={QuestionList} />
        <PrivateRoute exact path="/questions/:id" component={Votes} />
        <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />
        <PrivateRoute exact path="/add" component={PostQuestion} />
        <Route render={() => <ServerError />} />
      </Switch>
    </div>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  };
}
export default withRouter(connect(mapStateToProps)(Router));
