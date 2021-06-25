import React from 'react';
import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container";
import {Typography} from "@material-ui/core";
import pokemonCardStyle from "./PokemonCard.style";

function PokemonCard(props) {
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

PokemonCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number
}

export default PokemonCard;