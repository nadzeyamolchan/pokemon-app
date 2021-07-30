import React from "react";
import { Link } from "react-router-dom";
import {Container, Typography} from "@material-ui/core";
import { SignInForm } from "../../components/SignIn/SignIn";
import { useStyles } from "./SignInPage.style";

const SignInPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.root}>
        <SignInForm />
          <Typography>
              Don't have an account?
              <Link to="/signup" className={classes.link}>
                  Sign up
              </Link>
          </Typography>
      </Container>
    </React.Fragment>
  );
};

export default SignInPage;