import React from "react"
import {useParams} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import {pokemonService} from "../../service/PokemonService";
import PokemonCard from "../../components/PokemonCard/PokemonCard.component";
import pokemonCardPageStyle from "./PokemonCardPage.style";

export default function PokemonCardPage() {
    const {name} = useParams()
    const [pokemon, setPokemon] = React.useState(null)
    React.useEffect(() => pokemonService.getPokemonByName(name).then(res => setPokemon(res.data)), [name]);
    const classes = pokemonCardPageStyle();

    return pokemon ? (
        <div>
            <PokemonCard name={pokemon.name}
                         id={pokemon.id}
                         height={pokemon.height}
                         weight={pokemon.weight}
                         image={pokemon.sprites.other["official-artwork"].front_default}
            />
        </div>
    ) : (
            <Skeleton className={classes.pokemonCardSkeleton} variant="rect" animation="pulse"/>
    )
}