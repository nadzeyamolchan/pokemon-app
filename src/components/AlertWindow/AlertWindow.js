import React from "react";
import {Alert} from "@material-ui/lab";
import {Collapse, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {useDispatch, useSelector} from "react-redux";
import {actionTypes} from "../../redux/actionTypes";

export function AlertWindow() {
    const open = useSelector(state => state.login.isAlertWindowOpen);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Collapse in={open}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                dispatch({type: actionTypes.UNAUTHORIZED_ERROR});
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    Incorrect credentials. Check the entered data, please.
                </Alert>
            </Collapse>
        </React.Fragment>
    );
}