import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

export default function LoadingBar() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [hide, setHide] = React.useState(false);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function resetTick() {
    setHide(100);
    progress = hide;
    return;
  }

  return (
    <div>
      <CircularProgress
        className={classes.progress}
        variant="determinate"
        value={progress}
        color="primary"
      />
    </div>
  );
}
