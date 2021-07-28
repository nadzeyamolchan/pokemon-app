import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: () => ({
    height: "64vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  link: () => ({
    textDecoration: "none",
  }),
}));
