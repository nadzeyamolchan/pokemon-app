import React from "react";
import {Container, StylesProvider} from "@material-ui/core";
import './header.style.css'


export default function Header() {
    return (
        <StylesProvider injectFirst>
        <Container className="header-wrapper" maxWidth='lg' >
            <div className="logo-wrapper">
                <img className="pokemon-logo" src={process.env.PUBLIC_URL + '/pokemon-logo.svg'} alt='pokemon-logo'/>
            </div>
        </Container>
        </StylesProvider>
    )
}