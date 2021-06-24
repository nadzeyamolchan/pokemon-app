import React from "react"
import {useParams} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import {pokemonService} from "../../service/PokemonService";
import PokemonCard from "../../components/PokemonCard/PokemonCard.component";
import pokemonCardPageStyle from "./PokemonCardPage.style";
import {POKEMON_SPRITE} from "../../constants";

export default function PokemonCardPage() {
    const {id} = useParams();
    const [pokemon, setPokemon] = React.useState(null);
    React.useEffect(() => pokemonService.getPokemonById(id).then(res => setPokemon(res.data)), [id]);
    const classes = pokemonCardPageStyle();
    return pokemon ? (
        <div>
            <PokemonCard name={pokemon.name}
                         id={pokemon.id}
                         height={pokemon.height}
                         weight={pokemon.weight}
                         image={POKEMON_SPRITE(pokemon)}
            />
        </div>
    ) : (
            <Skeleton className={classes.pokemonCardSkeleton} variant="rect" animation="pulse"/>
    )
}