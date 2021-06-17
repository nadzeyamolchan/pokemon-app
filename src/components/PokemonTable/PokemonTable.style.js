
const pokemonTableStyles = (theme) => ({
    cell: {
        width: '20%',
        padding: '0',

        textAlign: 'center',

        '& img': {
            width: '100%',
            height: '100%'
        }
    },

    paginationRow: {
        borderBottom: 'none'
    },

    searchAndSelectWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        margin: theme.spacing(10, 'auto')
    }
});

export default pokemonTableStyles;