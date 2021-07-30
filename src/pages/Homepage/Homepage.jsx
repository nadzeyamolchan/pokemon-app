import React from "react";
import {Typography} from "@material-ui/core";

import homepageStyle from "./Homepage.style";
import {useSelector} from "react-redux";
import HomePageCard from "../../components/HomepageCard/HomePageCard";

const Homepage = () => {
  const classes = homepageStyle();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  return (
    <div className={classes.homePageWrapper}>
      <div className={classes.headerWrapper}>
        <Typography className={classes.homePageHeader} variant="h3">
          Welcome to the Pokemon app!
        </Typography>
        <HomePageCard isUserAuthorized={isAuthenticated}/>
      </div>
    </div>
  );
};

export default Homepage;
