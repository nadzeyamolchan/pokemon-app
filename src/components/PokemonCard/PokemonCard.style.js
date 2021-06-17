import {makeStyles} from "@material-ui/core";

const pokemonCardStyle = makeStyles({
        pokemonCardContainer: {
            height: '55vh',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-around'
        }
})

export default pokemonCardStyle;