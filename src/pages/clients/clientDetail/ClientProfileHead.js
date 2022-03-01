import React from 'react';
import {makeStyles} from "@material-ui/core";
import {themeColors} from "../../../components/ColorConstants";
import {extractDate, getNameHeader} from "../../../components/HelperFunctions";


const useStyles = makeStyles(() => ({
  container: {
    width: "200px",
    padding: "30px",
    display: "grid",
    gridTemplateRows: "repeat(3, auto)",
    gridRowGap: "10px",
    border: "1px solid " + themeColors.lightBlue,
    borderRadius: "10px",
    justifyItems: "center"
  },
  userIcon: {
    fontSize: "55px",
    width: "80px",
    height: "80px",
    textAlign: "center",
    background: 'radial-gradient(at top left, #F4F5F5, #2195B4)',
    borderRadius: "50%",
    color: "white"
  },
  name: {
    marginTop: "20px",
    paddingTop: "10px",
    fontSize: "24px",
    color: themeColors.lightBlue,
    textAlign: "center",
    borderTop: "1px dashed"
  }
}));

export default function ClientProfileHead ({data}) {

  const classes = useStyles();
  let nameIcon = getNameHeader(data.firstName, data.lastName);

  return (
      <div className={classes.container}>
        <div className={classes.userIcon}>{nameIcon}</div>
        <div className={classes.name}>{data.firstName} {data.lastName}</div>
        <div>Join Date: <br /> {extractDate(data.join_date)}</div>
      </div>
  )
}