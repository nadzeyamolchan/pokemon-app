import React from "react";
import {Container, StylesProvider} from "@material-ui/core";
import './header.style.css'
import {SearchBox} from "../search-box/search-box.component";


export default function Header() {
    return (
        <StylesProvider injectFirst>
        <Container className="header-wrapper" maxWidth='lg' >
            <div className="logo-wrapper">
                <img className="pokemon-logo" src={process.env.PUBLIC_URL + '/pokemon-logo.svg'} alt='pokemon-logo'/>
            </div>
            <h1 className="header-heading">Pokedex</h1>
            <SearchBox placeholder='Search for pokemon'/>
        </Container>
        </StylesProvider>
    )
}