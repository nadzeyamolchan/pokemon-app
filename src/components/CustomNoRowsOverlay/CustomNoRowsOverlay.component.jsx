import {GridOverlay} from "@material-ui/data-grid";

import customNoRowsOverlayStyle from "./CustomNoRowsOverlay.style";
import {CircularProgress} from "@material-ui/core";

export function CustomNoRowsOverlayComponent() {
    const classes = customNoRowsOverlayStyle();

    return (
        <GridOverlay className={classes.root}>
            <CircularProgress color="secondary" />
            <div className={classes.label}>Loading pokemon</div>
        </GridOverlay>
    );
}