import { makeStyles } from "@material-ui/core";

const footerStyle = makeStyles((theme) => ({
  footerWrapper: () => ({
    height: theme.spacing(10),

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    margin: theme.spacing(5, 0, "auto"),
    padding: theme.spacing(0, 5),

    backgroundColor: theme.palette.background.default,
  }),
}));

export default footerStyle;