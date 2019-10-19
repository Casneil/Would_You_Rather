import React from "react";
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
    maxWidth: 1000
  },
  root: {
    flexGrow: 1
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
    <div className="welcome-card">
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              CS
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={image}
          // image={require("../svg/casneil.svg")}
          title="Casneil's Would you rather"
        />
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
