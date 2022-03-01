import React from 'react';
import DetailListCard from "./DetailListCard";
import {makeStyles} from "@material-ui/core";

// check the position of the data
// return one of 3 options: first, last, other
const checkPosition = (index, length) => {
  let result = "other";
  if (index === 0) {
    result = "first";
  } else if (index === length - 1) {
    result = "last";
  }
  return result;
};

const useStyles = makeStyles(() => ({
  title: {
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "bold"
  }
}));


export default function DetailList({data}) {

  const classes = useStyles();

  // sort array by create date
  data.sort((a, b) => b.date - a.date);

  return (
      <div >
        <div className={classes.title}>Task History</div>
        {data.map((content, index) =>
        <DetailListCard data={content} key={index} position={checkPosition(index, data.length)} />)}
      </div>
  )

}