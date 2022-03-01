import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Icon from "../assets/web/thinking.svg";


const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: "30%"
  },
  img: {
    width: "200px",
    marginTop: "30px",
  },
  text: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px",
  }
}));


export default function DataNotFound({text}) {

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <img src={Icon} alt="not found." className={classes.img} />
        <div className={classes.text}>{text}. Please try again.</div>
      </div>
  );

}