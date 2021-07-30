import { makeStyles } from "@material-ui/core";

const searchBoxStyle = makeStyles((theme) => ({
  searchBoxWrapper: {
    width: "50%",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  searchInput: {
    width: "60%",
    padding: theme.spacing(1),
  },

  searchIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default searchBoxStyle;