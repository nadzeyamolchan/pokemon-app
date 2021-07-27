import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { SignInForm } from "../../components/SignIn/SignIn";
import { useStyles } from "./SignInPage.style";

const SignInPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.root}>
        <SignInForm />
        <Link to="/login/signup" className={classes.link}>
          Don't have an account? Sign up!
        </Link>
      </Container>
    </React.Fragment>
  );
};

export default SignInPage;