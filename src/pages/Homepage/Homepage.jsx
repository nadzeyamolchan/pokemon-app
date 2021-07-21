import React from "react";
import {Typography} from "@material-ui/core";
import homepageStyle from "./Homepage.style";
import LoginContainer from "../../components/Login/Login.container";

const Homepage = () => {
    const classes = homepageStyle();
    return (
        <div className={classes.homePageWrapper}>
            <div className={classes.headerWrapper}>
            <Typography className={classes.homePageHeader} variant="h3">
                Welcome to the Pokemon app!
            </Typography>
            </div>
            <LoginContainer/>
        </div>
    )
}

export default Homepage;