
const pokemonTableStyles = () => ({
    cell: {
        textAlign: 'center',
        width: '20%',
        height: '10rem',
        '& img': {
            width: '100%',
            height: '100%'
        }
    },

    headerCell: {
        textAlign: 'center'
    },

    table: {
        margin: '0 auto'
    },

    paginationRow: {
        borderBottom: 'none'
    }
});

export default pokemonTableStyles;