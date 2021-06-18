const pokemonTableStyles = (theme) => ({
    cell: {
        width: '20%',
        padding: '0',

        textAlign: 'center',

        '& img': {
            width: '100%',
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
    },
    loadingCircleWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default pokemonTableStyles;