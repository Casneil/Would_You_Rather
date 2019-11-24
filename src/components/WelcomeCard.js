import React from "react";

// MUI STUFF
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { blue } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import image from "../svg/casneil.svg";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: 40,
    objectFit: "cover",
    minWidth: "60%",
    maxWidth: "100%",
    height: "auto"
  },
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  link: {
    margin: theme.spacing(1)
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },

  avatar: {
    backgroundColor: blue[900]
  }
}));

const WelcomeCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              CS
            </Avatar>
          }
          title="Casneil Simpson's Would You Rather"
          subheader="Visit My Github"
        />
        <CardMedia className={classes.media} image={image} title="Github" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a version of the would you rather project from udacity
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeCard;
