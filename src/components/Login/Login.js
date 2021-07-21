import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {useStyles} from "./Login.styles";


export default function Login() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.elevation} elevation={4}>
          <LockOutlinedIcon />
          <Typography variant="h5" align="center">
            Login
          </Typography>
          <FormControl className={classes.form}>
            <Grid container spacing={1} className={classes.grid} >
              <Grid item xs={12} sm={6} >
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  size="large"
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  size="large"
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
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
                />
              </Grid>
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
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              size='large'
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </FormControl>
        </Paper>
      </div>
    </React.Fragment>
  );
}
