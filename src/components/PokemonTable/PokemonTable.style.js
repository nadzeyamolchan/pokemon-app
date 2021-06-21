import {makeStyles} from "@material-ui/core";

//TODO fix data-grid text align and column width

const pokemonTableStyles = makeStyles((theme) => ({
    searchAndSelectWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        margin: theme.spacing(10, 'auto')
    },
    loadingCircleWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataGrid: {
        textAlign: 'center'
    },
    pokemonSprite: {
        height: '100%'
    }
}));

export default pokemonTableStyles;