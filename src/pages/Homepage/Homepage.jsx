import React from "react";
import {Typography} from "@material-ui/core";
import { useSelector } from "react-redux";

import homepageStyle from "./Homepage.style";
import HomePageCard from "../../components/HomepageCard/HomePageCard";

const Homepage = () => {
  const classes = homepageStyle();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  const timeOfDay = () => {
    const date = new Date();
    const currentHour = date.getHours();
    if (currentHour > 20 && currentHour <= 24) {
      console.log("Good Night, ");
    }
    if (currentHour > 24 && currentHour <= 12) {
      console.log("Good Morning, ");
    }
    if (currentHour > 12 && currentHour <= 17) {
      return ("Good Afternoon, ");
    }
    if (currentHour > 17 && currentHour <= 20) {
      console.log("Good evening, ");
    }
  };

  timeOfDay();

  return (
    <div className={classes.homePageWrapper}>
      <div className={classes.main}>
        <Typography className={classes.homePageHeader} variant="h3">{timeOfDay()} user!</Typography>
        <Typography variant='h5'>
          Welcome to the Pokemon app!
        </Typography>
        <HomePageCard isUserAuthorized={isAuthenticated} />
      </div>
    </div>
  );
};

export default Homepage;
