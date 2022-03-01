import React from 'react';
import {makeStyles} from "@material-ui/core";
import {themeColors} from "../../components/ColorConstants";
import {splitKeyName} from "../../components/HelperFunctions";


const useStyles = makeStyles(() => ({
  row: {
    width: "60vw",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridColumnGap: "10px",
    textAlign: "center"
  },
  label: {
    color: "white",
    backgroundColor: themeColors.lightBlue,
    borderRadius: "10px",
  }
}));

export default function TaskDetailContent({data}) {

  const classes = useStyles();
  const dataKeys = Object.keys(data);

  return (
      <div className={classes.row}>
        {dataKeys.map((item, index) =>
            <div key={index} >
              <div className={classes.label}>{splitKeyName(item)}</div>
              <div>{data[item]}</div>
            </div>)}
      </div>
  )

}