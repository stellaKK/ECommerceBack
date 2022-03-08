// import React, {Component} from "react";
// import {withRouter} from "react-router-dom";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TaskListFilter from "./TaskListFilter";
import TaskList from "./TaskList";
import {themeColors} from "../../components/ColorConstants";
import {goToUrl} from "../../components/HelperFunctions";
import {Copyright} from "../dashboard/Copyright";
import MenuBars from "../dashboard/MenuBars";
import "../dashboard/MenuBars.css";
import AppBarSpacer from "../dashboard/AppBarSpacer";
import CreateNewTask from "./CreateNewTask";
import TaskDetail from "../taskDetail/TaskDetail";


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: themeColors.sectionBtn,
  },
}));

export default function TaskMain() {

  const classes = useStyles();
  const navigate = useNavigate();
  let location = useLocation();
  let paths = location.pathname.split("/");
  const pathLen = paths.length;

  // condition rendering
  let view;
  switch (true) {
    case (pathLen > 2 && paths[2] === "new"):
      view = <CreateNewTask />;
      break;
    case (pathLen > 2 && paths[2] === "task"):
      // task detail page
      if (pathLen === 4 && typeof(parseInt(paths[3])) === 'number') {
        view = <TaskDetail taskID={paths[3]} />;
      }
      break;
    default:
      // task main page
      view = (
          <div>
            <TaskListFilter />

            <div onClick={()=> goToUrl(navigate, "/tasks/new")}>
              <Button variant="contained" color="secondary"
                      className={classes.button} startIcon={<AddCircleOutlineIcon />}>
                Add New Task
              </Button>
            </div>

            <TaskList />
          </div>
      );
  }

  return (
      <div className="root">

        <MenuBars title="Tasks" />

        <main className="content">
          <AppBarSpacer />
          <Container maxWidth="lg" className="container">
            {view}
          </Container>

          <Copyright />
        </main>
      </div>
  );
}

// export default withRouter(withStyles(useStyles)(TaskMain));