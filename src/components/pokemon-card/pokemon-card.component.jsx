import React from 'react';
import Container from "@material-ui/core/Container";
import {Typography, StylesProvider} from "@material-ui/core";
import './pokemon-card.style.css';

const PokemonCard = (props) => {
    console.log(props);
    return (
        <StylesProvider injectFirst>
            <Container className="pokemon-card__container">
                <img src={props.image} alt="pokemon"/>
                <div>
                    <Typography variant="h1">{props.name}</Typography>
                    <div>
                        <Typography variant="h2">Height</Typography>
                        <Typography variant="body2">{props.height}</Typography>
                        <Typography variant="h2">Weight</Typography>
                        <Typography variant="body2">{props.weight}</Typography>
                    </div>
                </div>
            </Container>
        </StylesProvider>)
}


export default PokemonCard;

/*
<div>
    <h2>Type</h2>
    {props.type.map(item => {
        <p key={`${props.id}-${item}`}>{item}</p>
    })}</div>*/
