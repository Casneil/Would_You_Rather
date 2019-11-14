import React, { useState } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Link } from "react-router-dom";

// Material UI
import { Tooltip } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  control: {
    padding: theme.spacing(2)
  },
  fab: {
    margin: theme.spacing(1),
    float: "right"
  },
  padding: {
    flexGrow: 1,
    paddingTop: 40
  }
}));

const QuestionsList = ({ pending, answered }) => {
  const [value, setValue] = useState(0);
  // console.log("HHHHHHHHHHHHHHH", answered);

  // const { questionID, questions, pending, answered } = props;

  const classes = useStyles();

  //Simple Tabs Functions
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.padding}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        style={{ color: "#3d5afe" }}
      >
        <Tab label="Pending" {...a11yProps(1)} style={{ marginLeft: "38%" }} />
        <Tab label="Answered" {...a11yProps(0)} style={{ marginLeft: "4%" }} />
      </Tabs>

      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <Tooltip title="Add a question">
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          component={Link}
          to="/post"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Grid Grid container className={classes.root}>
        {value === 0
          ? pending.map(id => (
              <Grid>
                <>
                  <Question id={id} Pending={pending} />
                </>
              </Grid>
            ))
          : answered.map(id => (
              <Grid>
                <>
                  <Question id={id} Answered={answered} />
                </>
              </Grid>
            ))}
      </Grid>
      {
        //// Getting All Questions
        /* {questionID.map(id => (
          <Grid>
            <h3 key={id}>
              <Question id={id} />
            </h3>
          </Grid>
        ))} */
      }
    </div>
  );
};

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  const answered = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  return {
    questionID: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    // questions
    pending: Object.keys(questions)
      .filter(id => !answered.includes(id))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answered
  };
}

export default connect(mapStateToProps)(QuestionsList);
