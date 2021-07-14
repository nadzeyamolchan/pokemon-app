import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {actionTypes} from "../../redux/actionTypes";
import {useStyles} from "./DownloadPokemonForm.style";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function DownloadPokemonForm() {
    const isOpen = useSelector((state) => state.downloadModalWindow.isDownloadWindowOpen);
    const dispatch = useDispatch();
    const classes = useStyles();

    console.log(isOpen);

    const handleClose = () => {
        dispatch({type: actionTypes.TOGGLE_DOWNLOAD_POKEMON_MODAL_WINDOW})
    };

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Download collection</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Download files to start working with Pokemon App
                    </DialogContentText>
                    <FormControl>
                        <InputLabel htmlFor="my-input" className={classes.label}>Upload pokemon data</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" type="file" fullWidth="true"
                               className={classes.input}/>
                        <FormHelperText id="my-helper-text">To start working with application upload initial
                            data</FormHelperText>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Download
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}