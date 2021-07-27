import React from "react";
import { Button, Typography } from "@material-ui/core";
import axios from "axios";

import homepageStyle from "./Homepage.style";

const Homepage = () => {
  const classes = homepageStyle();
  const fetchPokemonData = async () => {
    await axios.get("/sync").then((res) => res);
  };
  return (
    <div className={classes.homePageWrapper}>
      <div className={classes.headerWrapper}>
        <Typography className={classes.homePageHeader} variant="h3">
          Welcome to the Pokemon app!
        </Typography>
        <Typography variant="body2" color="textPrimary">
          To start the application upload the pokemon data
        </Typography>
        <Button
          variant="outlined"
          className={classes.homePageButton}
          onClick={fetchPokemonData}
        >
          Download pokemon
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
