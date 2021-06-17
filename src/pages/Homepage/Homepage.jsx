import React from "react";
import {Container, Typography} from "@material-ui/core";
import homepageStyle from "./Homepage.style";

const Homepage = () => {
    const classes = homepageStyle();
    return (
        <Container className={classes.homePageWrapper}>
            <Typography variant="h1">
                Welcome to the Pokemon app!
            </Typography>
        </Container>
    )
}

export default Homepage;