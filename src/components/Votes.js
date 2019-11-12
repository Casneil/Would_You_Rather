import React from "react";
import { connect } from "react-redux";

// MUI Imports
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};

const useStyles = makeStyles({
  rating1: {
    width: 200,
    display: "flex",
    alignItems: "center"
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

// image={users.find(user => user.id === qs.author).avatarURL}

const Votes = ({ qs, users, authedUser }) => {
  console.log("UUUUUSEEEERs", users);
  const value = 2;

  const classes = useStyles();

  return (
    <div className={classes.rating}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Ratings</Typography>

        {users.map(user => (
          <div>
            <Avatar
              alt="Remy Sharp"
              src={user.avatarURL}
              className={classes.bigAvatar}
            />
            {user.name}
            <Rating name="read-only" value={value} readOnly />
          </div>
        ))}
      </Box>
    </div>
  );
};

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <Tooltip title={labels[value] || ""}>
      <span {...other} />
    </Tooltip>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired
};

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const qs = questions[id];

  return {
    qs,
    users: Object.values(users),
    authedUser
  };
}

export default connect(mapStateToProps)(Votes);
