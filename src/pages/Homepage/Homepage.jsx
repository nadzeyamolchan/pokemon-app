import React from "react";
import {Typography} from "@material-ui/core";
import homepageStyle from "./Homepage.style";

const Homepage = () => {
    const classes = homepageStyle();
    return (
        <div className={classes.homePageWrapper}>
            <Typography className={classes.homePageHeader} variant="h1">
                Welcome to the Pokemon app!
            </Typography>
        </div>
    )
}

export default Homepage;