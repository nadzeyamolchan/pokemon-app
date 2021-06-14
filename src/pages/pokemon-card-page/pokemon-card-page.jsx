import React from "react"
import {useParams} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import {StylesProvider} from '@material-ui/core';
import {pokemonService} from "../../service/PokemonService";
import PokemonCard from "../../components/pokemon-card/pokemon-card.component";
import './pokemon-card-page.style.css';


const PokemonCardPage = () => {
    const {name} = useParams()
    const [pokemon, setPokemon] = React.useState(null)
    React.useEffect(() => pokemonService.getPokemonByName(name).then(res => setPokemon(res.data)), [name]);

    return pokemon ? (
        <div>
            <PokemonCard name={pokemon.name}
                         height={pokemon.height}
                         weight={pokemon.weight}
                         image={pokemon.sprites.other["official-artwork"].front_default}
            />
        </div>
    ) : (
        <StylesProvider injectFirst>
            <Skeleton variant="rect" animation="pulse"/>
        </StylesProvider>
    )
}


export default PokemonCardPage;