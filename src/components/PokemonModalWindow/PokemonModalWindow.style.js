import {makeStyles} from "@material-ui/core";

export const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

export const useDialogStyle = makeStyles(() => ({
    dialogContent: {
        display: 'flex'
    },
    dialogContentDescription: {
        display: "flex",
        flexDirection: "column"
    },
    pokemonSprite : {
        width: '50%'
    }
}))