import React from 'react';
import {makeStyles} from "@material-ui/core";
import {themeColors} from "../components/ColorConstants";


const useStyles = makeStyles({
  pageTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: themeColors.lightOrange
  },
  info: {
    fontSize: "14px",
    fontWeight: "normal",
    color: "black",
    marginLeft: "10px"
  },
});

export default function SubTitle ({title, info=""}) {

  const classes = useStyles();

  return (
      <div className={classes.pageTitle}>{title}
        <span className={classes.info}>{info}</span></div>
  );
}