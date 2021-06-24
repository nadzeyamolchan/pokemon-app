import React from "react"
import {useParams} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import PokemonCard from "../../components/PokemonCard/PokemonCard.component";
import pokemonCardPageStyle from "./PokemonCardPage.style";
import {POKEMON_SPRITE, POKEMON_API_URL} from "../../constants";
import usePokemon from "../../hooks/usePokemon";

export default function PokemonCardPage() {
    const {id} = useParams();
    const pokemon = usePokemon(POKEMON_API_URL, id);
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