
const pokemonTableStyles = (theme) => ({
    cell: () => ({
        width: '20%',
        padding: '0',

        textAlign: 'center',

        '& img': {
            width: '100%',
            height: '100%'
        }
    }),

    paginationRow: () => ({
        borderBottom: 'none'
    })
});

export default pokemonTableStyles;