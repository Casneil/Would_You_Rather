import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import QuestionList from "./QuestionsList";
import WelcomeCard from "./WelcomeCard";
import Login from "./Login";

const Router = props => {
  return (
    <div>
      <Switch>
        {
          <Fragment>
            <Route path="/" exact component={WelcomeCard} />
            <Route path="/questions" exact component={QuestionList} />
            <Route path="/login" exact component={Login} />
          </Fragment>
        }
      </Switch>
    </div>
  );
};

export default Router;
