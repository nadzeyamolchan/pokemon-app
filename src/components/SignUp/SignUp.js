import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./SignUp.styles";

export const SignUpForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(5, "Must be more than 5 characters")
        .max(15, "Must be less than 15 characters")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      email: Yup.string().email(),
    }),
    onSubmit: async (values) => {
      await axios({
        method: "post",
        url: "/users",
        data: JSON.stringify(values, null, 2),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => localStorage.setItem("token", res.token))
        .catch((err) => console.log(err));
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <LockOutlinedIcon />
        <Typography variant="h5">Sign up</Typography>
        <TextField
          id="username"
          name="userName"
          label="Username"
          type="text"
          variant="outlined"
          autoComplete="username"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.userName && !!formik.errors.userName}
          helperText={formik.touched.userName && formik.errors.userName}
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
          error={formik.errors.password && !!formik.touched.password}
          helperText={formik.touched.password && formik.errors.password}
          required
        />
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="outlined"
          autoComplete="current-password-confirm"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.confirmPassword}
          helperText={
            formik.touched.confirmPassword && !!formik.errors.confirmPassword
          }
          required
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email && formik.touched.email}
          helperText={formik.touched.email && !!formik.errors.email}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};
