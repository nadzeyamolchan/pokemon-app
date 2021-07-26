import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        margin: '0 0 0 auto',
        width: '100%',
        left: '0%',
        "& > *": {
            padding: theme.spacing(4),
        },
    },
    elevation: {
        display: "flex",
        flexDirection: "column",
        height: "60vh",
        backgroundColor: "rgba(238,234,227,0.6)",
        "& > *": {
            alignSelf: "center",
        },
    },
    form: {
        width: '30%',
        "& > *": {
            margin: theme.spacing(1),
            alignSelf: "center",
        },
    }
}));
