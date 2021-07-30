import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import { SignUpForm } from "../../components/SignUp/SignUp";
import { useStyles } from "./SignUpPage.style";

const SignInPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.root}>
        <SignUpForm />
        <Typography>
          Already have an account?
          <Link to="/signin" className={classes.link}>
            Sign in
          </Link>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default SignInPage;