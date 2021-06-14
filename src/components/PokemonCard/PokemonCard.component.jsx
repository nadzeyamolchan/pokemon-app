import React from 'react';
import Container from "@material-ui/core/Container";
import {Typography} from "@material-ui/core";
import pokemonCardStyle from "./PokemonCard.style";

export default function PokemonCard(props) {
    const classes = pokemonCardStyle();
    return (
        <Container className={classes.pokemonCardContainer}>
            <img src={props.image} alt="pokemon"/>
            <div>
                <Typography variant="h1">{props.name} # {props.id}</Typography>
                <div>
                    <Typography variant="h2">Height</Typography>
                    <Typography variant="body2">{props.height}</Typography>
                    <Typography variant="h2">Weight</Typography>
                    <Typography variant="body2">{props.weight}</Typography>
                </div>
            </div>
        </Container>
    )
}