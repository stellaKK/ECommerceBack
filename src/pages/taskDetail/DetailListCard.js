import React from 'react';
import {makeStyles} from "@material-ui/core";
import {themeColors} from "../../components/ColorConstants";
import { ReactComponent as EditIcon } from "../../assets/web/edit.svg";
import { ReactComponent as DeleteIcon} from "../../assets/web/trash.svg";
import DeleteDialog from "./DeleteDialog";


// check whether is last card (need to add extra css)
const lastCard = (position) => {
  let view = "";
  if (position === "last") {
    view = (
    <svg width="22px" height="22px" style={{marginLeft: "10px"}}>
      <circle cx="11" cy="11" r="5" style={{fill: themeColors.lightGrey2}} />
    </svg>);
  }
  return view;
};

// apply circle css style based on it's position
// if it's first one, enlarge circle radius
const getRadius = (position) => {
  let radius = "5";
  if (position === "first") {
    radius = "8";
  }
  return radius;
};

const getCircleColor = (position) => {
  let color = themeColors.grey;
  if (position !== "first") {
    color = themeColors.lightGrey2;
  }
  return color;
};




const useStyles = makeStyles(() => ({
  container: {
    margin: "10px"
  },
  row: {
    display: "flex"
  },
  blockTitle: {
    marginLeft: "15px",
    fontSize: "12px",
    color: themeColors.lightBlue2
  },
  card: {
    width: "50vw",
    borderLeft: "1px solid " + themeColors.grey,
    marginLeft: "11px",
    padding: "5px 5px 5px 25px",
    backgroundImage: "linear-gradient(to left, rgba(255,0,0,0), "+themeColors.lightGrey2+")",
    backgroundPosition: "20px 0",
  },
  iconBlock: {
    float: "right",
  },
  icon: {
    width: "20px",
    height: "20px",
    marginLeft: "10px",
    borderRadius: "50%",
    padding: "3px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
    }
  }
}));

export default function TaskDetailContent({data, position}) {

  const classes = useStyles();

  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const openDeleteBox = () => {
    setDeleteOpen(true);
  };
  const closeDeleteBox = () => {
    setDeleteOpen(false);
  };
  const deleteMessage = () => {
    closeDeleteBox();
    console.log("message deleted");
  };

  return (
    <div>
      <DeleteDialog status={deleteOpen} closeBox={closeDeleteBox} confirmDelete={deleteMessage} />

      <div className={classes.container}>
        <div className={classes.row}>
          <div>
            <svg width="22px" height="22px">
              <circle cx="11" cy="11" r={getRadius(position)} style={{fill:getCircleColor(position)}} />
            </svg>
          </div>
          <div className={classes.blockTitle}>Last Update: {data.date.toString()}, Send by: {data.sender}</div>
        </div>

        <div className={classes.card}>{data.message}
          <span className={classes.iconBlock}>
            <EditIcon fill={themeColors.grey} className={classes.icon} />
            <DeleteIcon fill={themeColors.grey} className={classes.icon}
                        onClick={()=>openDeleteBox()} />
          </span>
        </div>
      </div>
      {lastCard(position)}
    </div>
  )

}