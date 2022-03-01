/* template from: material-ui */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import {signInError, signIn, signInSuccess} from "../store/reducers/userSlice";
import { userSignInHttp } from "../http/UserHttp";
import { LOADING } from "../components/Constants";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Bath100
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[300]),
    backgroundColor: purple[800],
    '&:hover': {
      backgroundColor: purple[400],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorText: {
    color: "red"
  }
}));

export default function SignIn() {
  const classes = useStyles();

  const { status, error, isAuthUser } = useSelector(state => state).user;
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    let data = { username: e.target.username.value, password: e.target.password.value };
    userSignInHttp(dispatch, signIn, signInSuccess,signInError, data);
  };

  return (
    <Container component="main" maxWidth="xs">
      {isAuthUser ? <Navigate to="/" />: ""}

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined" margin="normal" required fullWidth
            id="username" label="Username" name="username"
            autoComplete="username" autoFocus />
          <TextField
            variant="outlined" margin="normal" required fullWidth
            name="password" label="Password" type="password" id="password"
            autoComplete="current-password" />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me" />

          <div className={classes.errorText}>{error}</div>

          <ColorButton
            type="submit" fullWidth variant="contained"
            color="primary" className={classes.submit} disabled={status === LOADING}>
            {status === LOADING ? "Pending..." : "Login"}
          </ColorButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}