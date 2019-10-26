import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import QuestionList from "./QuestionsList";
import WelcomeCard from "./WelcomeCard";
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";

const Router = props => {
  return (
    <div>
      <Switch>
        {
          <Fragment>
            <Route exact path="/" component={WelcomeCard} />
            <Route exact path="/questions" component={QuestionList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/leaderBoard" component={LeaderBoard} />
          </Fragment>
        }
      </Switch>
    </div>
  );
};

export default Router;
