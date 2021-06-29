import React from 'react';
import { DialogContent, Typography, IconButton, Dialog, withStyles } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";

import {styles, useDialogStyle} from "./PokemonModalWindow.style";

PokemonModalWindow.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number
}

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose} = props;
    return (
        <MuiDialogTitle disableTypography {...props} className={classes.root} >
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default function PokemonModalWindow(props) {

    const classes = useDialogStyle();

    return (
        <div>
            <Dialog onClose={props.isClose} aria-labelledby="customized-dialog-title" open={props.isOpen} maxWidth="md">
                <DialogTitle id="customized-dialog-title" onClose={props.isClose}>
                    {`# ${props.id} ${props.name}`}
                </DialogTitle>
                <DialogContent dividers className={classes.dialogContent}>
                    <img className={classes.pokemonSprite} src={props.sprite} alt='pokemon-sprite'/>
                    <DialogContent dividers className={classes.dialogContentDescription}>
                        <Typography gutterBottom>
                             {`Height: ${props.height}`}
                        </Typography>
                        <Typography gutterBottom>
                            {`Weight: ${props.weight}`}
                        </Typography>
                    </DialogContent>
                </DialogContent>
            </Dialog>
        </div>
    );
}