import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import {styles, useDialogStyle} from "./test.styles";
import {DialogContent} from "@material-ui/core";


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

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const classes = useDialogStyle();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const testPokemon = {
        name: 'Bulbasaur',
        id: 1,
        height: 7,
        weight: 69,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Click me!
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="md">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {`# ${testPokemon.id} ${testPokemon.name}`}
                </DialogTitle>
                <DialogContent dividers className={classes.dialogContent}>
                    <img src={testPokemon.sprite} alt='pokemon-sprite'/>
                    <DialogContent dividers className={classes.dialogContentDescription}>
                        <Typography gutterBottom>
                             {`Height: ${testPokemon.height}`}
                        </Typography>
                        <Typography gutterBottom>
                            {`Weight: ${testPokemon.weight}`}
                        </Typography>
                    </DialogContent>
                </DialogContent>
            </Dialog>
        </div>
    );
}