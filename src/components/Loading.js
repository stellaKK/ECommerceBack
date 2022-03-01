import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(() => ({
  root: {
    padding: "30px 0 0 30%",
  },
}));


export default function DataNotFound() {

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
  );

}