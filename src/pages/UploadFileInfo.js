import React from 'react';
import {makeStyles} from "@material-ui/core";
import SubTitle from "./SubTitle";


const useStyles = makeStyles(() => ({
  container: {
    margin: "30px 0 10px 20px",
  }
}));


export default function UploadFileInfo({text, title}) {
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <SubTitle title={title} />
        {text.map((line, index)=>
        <div key={index}>{index + 1}. {line}</div>)}
      </div>
  )
}