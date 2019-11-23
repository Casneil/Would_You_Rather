import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { Tooltip } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {},
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  avatar: {
    backgroundColor: blue[900]
  },
  img: {
    height: 50,
    margin: 2
  }
}));

const Navbar = ({ users, authedUser }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {authedUser ? (
            <>
              <Tooltip title="Questions">
                <Button
                  className={classes.menuButton}
                  color="inherit"
                  component={Link}
                  to="/pending"
                >
                  <QuestionAnswerIcon />
                </Button>
              </Tooltip>

              <Tooltip title="Leader Board">
                <Button
                  className={classes.menuButton}
                  color="inherit"
                  component={Link}
                  to="/leaderboard"
                >
                  <EqualizerIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Username">
                <Typography
                  variant="h6"
                  noWrap
                  className={classes.title}
                ></Typography>
              </Tooltip>
              <Tooltip title="Log Out">
                <Button color="inherit" component={Link} to="/logout">
                  Log Out
                </Button>
              </Tooltip>
              <Tooltip title={authedUser}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <img
                    className={classes.img}
                    src={users.find(user => user.id === authedUser).avatarURL}
                  />
                </Avatar>
              </Tooltip>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                noWrap
                className={classes.title}
              ></Typography>

              <Tooltip title="Login">
                <Button color="inherit" href="/login">
                  Log In
                </Button>
              </Tooltip>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users),
    authedUser
  };
}

export default connect(mapStateToProps)(Navbar);
