import React from "react";
import {Typography} from "@material-ui/core";
import homepageStyle from "./Homepage.style";
import DownloadPokemonForm from "../../components/DownloadPokemonForm/DownloadPokemonForm";

const Homepage = () => {
    const classes = homepageStyle();
    return (
        <div className={classes.homePageWrapper}>
            <Typography className={classes.homePageHeader} variant="h1">
                Welcome to the Pokemon app!
            </Typography>
            <DownloadPokemonForm/>
        </div>
    )
}

export default Homepage;