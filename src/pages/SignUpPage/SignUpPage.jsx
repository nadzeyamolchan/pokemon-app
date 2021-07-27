import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { SignUpForm } from "../../components/SignUp/SignUp";
import { useStyles } from "./SignUpPage.style";

const SignInPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.root}>
        <SignUpForm />
        <Link to="/signup" className={classes.link}>
          Already have an account? Sign in
        </Link>
      </Container>
    </React.Fragment>
  );
};

export default SignInPage;