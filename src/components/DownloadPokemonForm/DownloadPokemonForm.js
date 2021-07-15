import React from 'react';
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  FormHelperText,
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {actionTypes} from "../../redux/actionTypes";
import {useStyles} from "./DownloadPokemonForm.style";

export default function DownloadPokemonForm() {
    const isOpen = useSelector((state) => state.downloadModalWindow.isDownloadWindowOpen);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleClose = () => {
        dispatch({type: actionTypes.TOGGLE_DOWNLOAD_POKEMON_MODAL_WINDOW})
    };

    const handleSubmit = (event) =>  {
        event.preventDefault();
    }

    const handleChange = (event) => {
        let files = event.target.files[0];

        let reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = (event) => {
            //axios POST request to send data to the server
            const formData = {file: event.target.result};
            console.log(formData);
            return axios.post('', formData)
                .then(res => console.log('result', res))
        }
    }

    return (
        <React.Fragment>
        <div>
            <form onSubmit={handleSubmit}>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Download collection</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Download files to start working with Pokemon App
                    </DialogContentText>
                            <Input id="upload-pokemon" name="pokemon-data" aria-describedby="download-pokemon-data" type="file" inputProps={{ multiple: true }} fullWidth={true}
                                   className={classes.input} onChange={(event) => handleChange(event)} />
                        <FormHelperText id="upload-pokemon-data-helper-text">To start working with application upload initial
                            data</FormHelperText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" type="submit" onClick={handleSubmit}>
                        Download
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            </form>
        </div>
        </React.Fragment>
    );
}