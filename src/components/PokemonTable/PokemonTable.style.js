import {makeStyles} from "@material-ui/core";

const pokemonTableStyles = makeStyles((theme) => ({
    searchAndSelectWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        margin: theme.spacing(10, 'auto')
    },
    pokemonSprite: {
        height: '100%'
    },
    dataGridContainer: {
        flexGrow: 1
    },
    dataGridRows: {
        cursor: "pointer"
    }
}));

export default pokemonTableStyles;