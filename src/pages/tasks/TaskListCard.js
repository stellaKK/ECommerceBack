import React from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {themeColors} from "../../components/ColorConstants";
import Divider from "@material-ui/core/Divider";
import {getCurrentDate, goToUrl} from "../../components/HelperFunctions";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    border: "1px solid " + themeColors.sideMenuBg2,
    padding: "5px",
    marginBottom: "15px",
    boxShadow: "5px 5px #DFDFDF",
    borderRadius: "5px",
    cursor: "pointer"
  },
  quote: {
    backgroundColor: themeColors.lightBlueTrans,
    color: themeColors.lightBlue2
  },
  workSchedule: {
    backgroundColor: themeColors.lightOrangeTrans,
    color: themeColors.lightOrange
  },
  general: {
    backgroundColor: themeColors.lightGrey
  },
  typeBox: {
    padding: "2px 5px",
    borderRadius: "5px",
    width: "max-content",
    webkitWidth: "max-content",
    mozWidth: "max-content",
    textAlign: "center",
    fontSize: "14px",
    marginRight: "5px"
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: themeColors.sideMenuBg1
  },
  footer: {
    padding: "2px"
  },
  // trapezoid-right: https://clubmate.fi/different-trapezoid-shapes-with-css
  // https://forum.freecodecamp.org/t/how-to-nest-text-into-shapes-floating-trapezoid/103143/3-----
  wrapper: {
    display: "inlineBlock",
    position: "relative",
    width: "15vw",
    float: "right",
    bottom: "30px",
    right: "-20px"
  },
  trapezoid: {
    borderBottom: "25px solid " + themeColors.lightRed,
    borderLeft: "20PX solid transparent",
    borderRight: "0 solid transparent",
    borderTop: "0 solid transparent",
  },
    text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  }
  //--------------------------------------------------------------

}));

// return class name based on task type
const getTypeClassName = (type) =>{
  let name = "";
  switch (type) {
    case "Quote":
      name = "quote";
      break;
    case "Work Schedule":
      name = "workSchedule";
      break;
    default:
      name = "general";
  }
  return name;
};

// get remaining days from due date; return as string
// input date format: yyyy-mm-dd
const getRemainDays = (dueDate) => {

  let result = "";
  let dateList = dueDate.split("-");
  let due = new Date(parseInt(dateList[1]) + "/" + parseInt(dateList[2]) + "/" + parseInt(dateList[0]));

  let currentDateList = getCurrentDate().split("-");
  let current = new Date(parseInt(currentDateList[1]) + "/" + parseInt(currentDateList[2]) + "/" +
      parseInt(currentDateList[0]));

  let diff = Math.abs(due - current);
  if (due < current) {
    // overdue
    result = "Overdue";
  } else {
    let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    result = diffDays === 1 ? diffDays + " day left": diffDays + " days left";
  }
  return result;
};


export default function TaskListCard(props) {
  const classes = useStyles();
  const {data} = props;
  const navigate = useNavigate();

  return (
      <div className={classes.root} onClick={()=>goToUrl(navigate, "/tasks/task/" + data.taskNum)}>
        <div className={classes.title}>
          <span className={classes.typeBox + " " + classes[getTypeClassName(data.type)]}>{data.type}</span>
          #{data.taskNum}# {data.title}</div>
        <Divider />
        <div>{data.content}</div>
        <Divider />
        <div className={classes.footer}>Created By: {data.createBy}</div>

        <div className={classes.wrapper}>
          <div className={classes.trapezoid}/>
          <div className={classes.text}>{getRemainDays(data.dueDate)}</div>
        </div>

      </div>
  );
}