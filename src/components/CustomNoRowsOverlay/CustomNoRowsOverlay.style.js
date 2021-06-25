import {theme} from "../../theme";

const {makeStyles} = require("@material-ui/core");

const customNoRowsOverlayStyle = makeStyles(
    (theme) => ({
        root: {
            flexDirection: 'column'
        },
        label: {
            marginTop: theme.spacing(1),
        },
    }),
    { theme: theme },
);

export default customNoRowsOverlayStyle;