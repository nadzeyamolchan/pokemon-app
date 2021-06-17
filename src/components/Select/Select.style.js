import {makeStyles} from "@material-ui/core";

const selectStyle = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: '50%',
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    }
}));

export default selectStyle;