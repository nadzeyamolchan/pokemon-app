import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className="card">
        <img alt="pokemon" src={props.pokemon.sprites.other['official-artwork'].front_default}/>
        <h1>{props.pokemon.name}</h1>
        <h2>Weight <b>{props.pokemon.weight}</b></h2>
        <h2>Height <b>{props.pokemon.height}</b></h2>
        <h2>Base experience <b>{props.pokemon.base_experience}</b></h2>
    </div>
)