import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: () => ({
    width: "30%",
    margin: "0, auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  }),
}));