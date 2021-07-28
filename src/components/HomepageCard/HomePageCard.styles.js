import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        "&:visited": {
            color: "#51483f"
        },
        "&:hover": {
            color: "#b69471"
        }
    }
}));

export default useStyles;
