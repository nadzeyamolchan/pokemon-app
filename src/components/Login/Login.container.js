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
import axios from "axios";
import { useStyles } from "./Login.styles";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../redux/actionTypes";

export default function LoginContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { signIn } = useSelector((state) => state.login);


  const [fieldData, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userName: ''
  });

  const handleLoginForm = () => {
    dispatch({ type: actionTypes.TOGGLE_LOGIN_FORM });
  };

  const handleChangeEmail = (event) => {
    updateData('email', event.target.value);
  };

  const handlePasswordChange = (event) => {
    updateData('password', event.target.value);
  }

  const handleChangeConfirmPassword = (event) => {
    updateData('confirmPassword', event.target.value);
  }

  const handleChangeUserName = (event) => {
    updateData('userName', (event.target.value));
  }

  const updateData = (k, v) => setData((prev) => ({ ...prev, [k]: v }));

  const clearTheForm = (fields) => {
    Object.keys(fields).map(field => {
      return updateData(field, '')
    })
  }

  const handleSingUpSubmit = async () => {
    await axios({ method: 'post',
      url: '/users',
      data: {
        email: fieldData.email,
        userName: fieldData.userName,
        password: fieldData.password,
        confirmPassword: fieldData.confirmPassword,
      },
      headers: {
      'Content-Type': 'application/json',
      }
    }).then(res => localStorage.setItem('token', res.token));
    clearTheForm(fieldData);
  };

  const handleSignInSubmit = async () => {
    await axios({ method: 'post',
      url: '/auth/login',
      data: {
        username: fieldData.userName,
        password: fieldData.password,
      },
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => localStorage.setItem('token', res.token))
    clearTheForm(fieldData);
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.elevation} elevation={1}>
          <LockOutlinedIcon />
          <Typography variant="h5" align="center">
            {signIn ? "Login" : "Sign up"}
          </Typography>
          <FormControl className={classes.form} onSubmit={signIn ? handleSignInSubmit : handleSingUpSubmit}>
            <Grid container spacing={1} className={classes.grid}>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="email"
                  value={fieldData.userName}
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
                  value={fieldData.password}
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
                      name="confirm-password"
                      label="Confirm Password"
                      type="password"
                      id="password"
                      autoComplete="confirm-password"
                      value={fieldData.confirmPassword}
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
                            value={fieldData.email}
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
              onClick={signIn ? handleSignInSubmit : handleSingUpSubmit}
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
