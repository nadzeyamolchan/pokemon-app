import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  FormControl,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./Login.styles";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../redux/actionTypes";
import store from "../../redux/store";
import {sendCredentialsToDataBase} from "../../redux/loginSlice";

export default function LoginContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { signIn } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');

  const handleLoginForm = () => {
    dispatch({ type: actionTypes.TOGGLE_LOGIN_FORM });
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  }

  const handleSubmit = (event) => {
    store.dispatch(sendCredentialsToDataBase(email,password, confirmPassword, userName))
    event.preventDefault();
  };

  const handleSignInSubmit = (event) => {
    console.log('Sign in!')
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.elevation} elevation={4}>
          <LockOutlinedIcon />
          <Typography variant="h5" align="center">
            {signIn ? "Login" : "Sign up"}
          </Typography>
          <FormControl className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={1} className={classes.grid}>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="email"
                  autoComplete="email"
                  value={userName}
                  onChange={handleChangeUserName}
                />
              </Grid>
                <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Grid>
              {signIn ? null : (
                <React.Fragment>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Confirm Password"
                      type="password"
                      id="password"
                      autoComplete="confirm-password"
                      value={confirmPassword}
                      onChange={handleChangeConfirmPassword}
                    />
                  </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </Grid>
                </React.Fragment>
              )}
            </Grid>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              onClick={signIn ? handleSignInSubmit : handleSubmit}
              className={classes.submit}
            >
              {signIn ? "Login" : "Sign up"}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleLoginForm}>
                  {signIn
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </FormControl>
        </Paper>
      </div>
    </React.Fragment>
  );
}
