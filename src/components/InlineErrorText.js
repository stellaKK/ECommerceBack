import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid red",
    borderRadius: "10px",
    margin: "10px 10px",
    padding: "5px",
    width: "60%",
    backgroundColor: "#FFADAD",
    color: "#931111",
  },
  icon: {
    margin: "0 5px",
    backgroundColor: "#E51E1E",
    color: "white",
    borderRadius: "50%",
    fontSize: "14px",
    padding: "0 5px",
  }
}));


export default function InlineErrorText({text}) {

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <span className={classes.icon}>X</span>
        {text}.
      </div>
  );

}