import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./HomePageCard.styles";
import axios from "axios";

export default function HomePageCard({ ...props }) {
  const classes = useStyles();
  const fetchPokemonData = async () => {
    await axios.get("/sync").then((res) => res);
  };
  return (
    <div>
      {props.isUserAuthorized ? (
        <Typography color="textPrimary">
          <b>
            <a href="/" onClick={fetchPokemonData} className={classes.link}>
              Download{" "}
            </a>
          </b>
          the pokémon data to get started
        </Typography>
      ) : (
        <Typography color="textPrimary">
          To get started,
          <b>
            <a href={"../signin"} className={classes.link}>
              log in{" "}
            </a>
          </b>
          to the app{" "}
        </Typography>
      )}
    </div>
  );
}
