import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function AppBarSpacer() {
  const classes = useStyles();
  return <div className={classes.appBarSpacer} />;
}