import React from "react";
import {Container, StylesProvider} from "@material-ui/core";
import { Link } from 'react-router-dom';
import './header.style.css'


export default function Header() {
    return (
        <StylesProvider injectFirst>
        <Container className="header-wrapper" maxWidth='lg' >
            <div className="logo-wrapper">
                <img className="pokemon-logo" src={process.env.PUBLIC_URL + '/pokemon-logo.svg'} alt='pokemon-logo'/>
            </div>
            <nav className="options">
                <Link className="option" to='/'>
                    Home
                </Link>
                <Link className="option" to='/pokemon'>
                    Pokemon
                </Link>
            </nav>
        </Container>
        </StylesProvider>
    )
}