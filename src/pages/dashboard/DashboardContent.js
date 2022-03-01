import React from "react";
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import MessageOverview from "./MessageOverview";
//import {useStyles} from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  fixedHeight: {
    width: "100%",
    height: "300px"
  },
  paper: {
    marginRight: "20px",
    padding: "10px"
  }
});

export default function DashboardContent() {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={12}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>

      <Grid item xs={2} md={2} lg={4}>
          <MessageOverview />
      </Grid>
    </Grid>
  );
}
/*
// *       <Grid container spacing={3}>
//       {/* Chart */
// <Grid item xs={12} md={8} lg={9}>
//   <Paper className={fixedHeightPaper}>
//     <Chart />??
//   </Paper>
// </Grid>
// {/* Recent Deposits */}
// {/*<Grid item xs={12} md={4} lg={3}>*/}
// {/*<Paper className={fixedHeightPaper}>*/}
// {/*<Deposits />*/}
// {/*</Paper>*/}
// {/*</Grid>*/}
// {/*/!* Recent Orders *!/*/}
// {/*<Grid item xs={12}>*/}
// {/*<Paper className={classes.paper}>*/}
// {/*<Orders />*/}
// {/*</Paper>*/}
// {/*</Grid>*/}
// </Grid>
