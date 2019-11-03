import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import QuestionList from "./QuestionsList";
import WelcomeCard from "./WelcomeCard";
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";
import PostQuestion from "./PostQuestion";
import Logout from "./Logout";

const Router = props => {
  const { users, authedUser, loginUser } = props;
  console.log(props);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomeCard} />
        <Route exact path="/login" component={Login} />
        {loginUser && (
          <Fragment>
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/questions" component={QuestionList} />
            <Route exact path="/leaderBoard" component={LeaderBoard} />
            <Route exact path="/post" component={PostQuestion} />
            {/* <Route exact path="/logout" component={WelcomeCard} /> */}
          </Fragment>
        )}
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

{
  /* <Route path="*">             <NoMatch />           </Route> */
}
