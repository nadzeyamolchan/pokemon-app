import React from 'react';
import { DialogContent, Typography, IconButton, Dialog } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";

import {useDialogStyle, useDialogTitleStyles} from "./PokemonModalWindow.style";
import {useDispatch, useSelector} from "react-redux";
import {actionTypes} from "../../redux/actionTypes";

PokemonModalWindow.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number
}

const DialogTitle = (props) => {
    const classes = useDialogTitleStyles();
    const {children, onClose} = props;
    return (
        <MuiDialogTitle disableTypography {...props} className={classes.root} >
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" edge='start' className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

export default function PokemonModalWindow() {

    const classes = useDialogStyle();
    const dispatch = useDispatch();
    const pokemonObject = useSelector(state => state.selectedPokemon.selectedPokemon);
    const showModalWindow = useSelector(state => state.selectedPokemon.showPokemonModalWindow);

    const handleToggleModalWindow = () => {
        dispatch({type: actionTypes.toggleModalWindow})
    }

    return (
        <div>
            <Dialog onClose={handleToggleModalWindow} aria-labelledby="customized-dialog-title" open={showModalWindow} maxWidth="md">
                <DialogTitle id="customized-dialog-title" onClose={handleToggleModalWindow}>
                    {`# ${pokemonObject.id} ${pokemonObject.name}`}
                </DialogTitle>
                <DialogContent dividers className={classes.dialogContent}>
                    <img className={classes.pokemonSprite} src={pokemonObject.sprite} alt='pokemon-sprite'/>
                    <DialogContent dividers className={classes.dialogContentDescription}>
                        <Typography gutterBottom>
                             {`Height: ${pokemonObject.height}`}
                        </Typography>
                        <Typography gutterBottom>
                            {`Weight: ${pokemonObject.weight}`}
                        </Typography>
                    </DialogContent>
                </DialogContent>
            </Dialog>
        </div>
    );
}