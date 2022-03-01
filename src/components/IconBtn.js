/*
* icon button component.
* sample input data:
*   let orderBtnData = {
    icon: <OrderImg fill={themeColors.lightBlue2} width="20" height="20" />, text: "Order History",
    color: themeColors.lightBlue2, url: "/"
  };
* */
import React from 'react';
import {makeStyles} from "@material-ui/core";
import {goToUrl} from "./HelperFunctions";


const useStyles = makeStyles({
  container: {
    "&:hover": {
      backgroundColor: props => props.hoverColor,
      border: "none"
    },
    color: props => props.color,
    border: "1px solid",
    borderRadius: "10px",
    padding: "5px",
    width: "150px",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer"
  },
  label: {
    marginLeft: "5px",
  }
});


export default function IconBtn ({data, history}) {

  const classes = useStyles(data);

  return (
      <div className={classes.container} onClick={()=>goToUrl(history, data.url)}>
        {data.icon}
        <span className={classes.label}>{data.text}</span>
      </div>
  )
}