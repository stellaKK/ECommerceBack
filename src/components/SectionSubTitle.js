import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {themeColors} from "../components/ColorConstants";
import {goToUrl} from "../components/HelperFunctions";
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles(() => ({
  root: {
    fontSize: "16px",
    color: themeColors.sectionBtn,
    fontWeight: "bold",
  },
}));


export default function SectionSubTitle(props) {

  const classes = useStyles();
  // data sample: {title: "some title here", func: history, backUrl: "/tasks"}
  const { data } = props;

  return (
      <div className={classes.root}>
        <IconButton aria-label="arrowBack">
          <ArrowBackIcon onClick={()=>goToUrl(data.func, data.backUrl)} />
        </IconButton>
        {data.title}
      </div>
  );

}
