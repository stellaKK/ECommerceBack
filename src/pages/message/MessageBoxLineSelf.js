/* Individual message block in message box, representing messages from myself */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {themeColors} from "../../components/ColorConstants";
import {getCurrentTime} from "../../components/HelperFunctions";


const useStyles = makeStyles(() => ({
  root: {
    width: "fit-content",
    padding: "10px",
    margin: "5px",
    backgroundColor: themeColors.lightBlueHover,
    borderRadius: "15px 15px 0 15px",
    marginLeft: "auto",
    marginRight: 0
  },
  time: {
    fontSize: "10px",
    fontStyle: "italic",
  }
}));

export default function MessageBoxLineSelf({data}) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        {data.message}
        <div className={classes.time}>{getCurrentTime(data.time)}</div>
      </div>
  );
}