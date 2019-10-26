import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { Tooltip } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {},
  title: {
    flexGrow: 1
  }
}));

const Navbar = props => {
  const classes = useStyles();
  const { users } = props;
  // console.log("NNNNAVVVBAAABR", users.id);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="Home">
            <Button className={classes.menuButton} color="inherit" href="/">
              <HomeIcon />
            </Button>
          </Tooltip>

          <Tooltip title="Questions">
            <Button
              className={classes.menuButton}
              color="inherit"
              href="/questions"
            >
              <QuestionAnswerIcon />
            </Button>
          </Tooltip>

          <Tooltip title="Leader Board">
            <Button
              className={classes.menuButton}
              color="inherit"
              href="leaderBoard"
            >
              <EqualizerIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Username">
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
            ></Typography>
          </Tooltip>
          <Tooltip title="Login">
            <Button color="inherit" href="/login">
              Log In
            </Button>
          </Tooltip>
          <Tooltip title="Account">
            <AccountCircle />
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Navbar);
