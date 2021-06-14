import {makeStyles} from "@material-ui/core";
import {theme} from "../../theme";

const footerStyle = makeStyles({
    footerWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20vh',
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
    }
});

export default footerStyle;