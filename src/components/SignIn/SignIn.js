import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Button, TextField, Typography} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {useStyles} from "./SignIn.styles";

export const SignInForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, "Must be more than 5 characters")
        .max(15, "Must be less than 15 characters")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await axios({
        method: "post",
        url: "/auth/login",
        data: {...values},
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        localStorage.setItem("token", res.token)}
      );
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <LockOutlinedIcon />
        <Typography variant="h5">Sign in</Typography>
        <TextField
          id="username"
          name="username"
          label="Username"
          type="text"
          variant="outlined"
          autoComplete="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && !!formik.errors.username}
          helperText={formik.touched.username && formik.errors.username}
          required
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password && formik.touched.password}
          helperText={formik.touched.password && formik.errors.password}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};
