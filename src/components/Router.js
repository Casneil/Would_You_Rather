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

const Router = ({ loginUser }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomeCard} />
        <Route exact path="/login" component={Login} />
        {loginUser && (
          <Fragment>
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/questions" component={QuestionList} />
            <Route exact path="/leaderboard" component={LeaderBoard} />
            <Route exact path="/add" component={PostQuestion} />
            <Route exact path="/votes/:id" component={Votes} />
          </Fragment>
        )}
        <Route component={ServerError} />
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
