import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles(() => ({
  info: {
    width: "400px",
    padding: "10px",
    borderRadius: "5px",
    margin: "20px 10px",
    backgroundColor: "#BDF7BE",
  },
  link: {
    color: "#157E30",
    fontWeight: "bold",
    textDecoration: "underline",
    cursor: "pointer"
  },
  icon: {
    margin: "0 5px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "3px 5px",
    color: "#157E30",
  }
}));


export default function LinkMessage({text1, text2, url}) {

  const classes = useStyles();
  let history = useNavigate();

  const handleRedirect = () => {
    history.push(url);
  };

  return (
      <div className={classes.info}>
        <span className={classes.icon}>&#10004;</span>
        {text1}
        <span className={classes.link} onClick={()=>handleRedirect()}>Click </span>
        {text2}
      </div>
  );

}