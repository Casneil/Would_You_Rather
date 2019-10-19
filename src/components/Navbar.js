import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { Tooltip } from "@material-ui/core";

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="Home">
            <Button className={classes.menuButton} color="inherit">
              <HomeIcon />
            </Button>
          </Tooltip>

          <Tooltip title="New Question">
            <Button className={classes.menuButton} color="inherit">
              <QuestionAnswerIcon />
            </Button>
          </Tooltip>

          <Tooltip title="Leader Board">
            <Button className={classes.menuButton} color="inherit">
              <EqualizerIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Username">
            <Typography variant="h6" className={classes.title}>
              Hello Mr Simpson
            </Typography>
          </Tooltip>
          <Tooltip title="Login">
            <Button color="inherit">Log Out</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
