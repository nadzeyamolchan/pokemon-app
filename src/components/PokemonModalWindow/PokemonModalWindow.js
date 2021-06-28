import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import {styles, useDialogStyle} from "./PokemonModalWindow.style";
import {DialogContent} from "@material-ui/core";
import PropTypes from "prop-types";

PokemonModalWindow.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number
}

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
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