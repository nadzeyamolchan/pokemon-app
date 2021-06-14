import React from "react";
import {Container} from "@material-ui/core";
import {Link} from 'react-router-dom';
import headerStyle from "./Header.style";

export default function Header() {
    const classes = headerStyle();
    return (
        <Container className={ classes.headerWrapper } maxWidth='lg'>
            <Link to='/'>
                <div className="logo-wrapper">
                    <img className="pokemon-logo" src={ process.env.PUBLIC_URL + '/pokemon-logo.svg' }
                         alt='pokemon-logo'/>
                </div>
            </Link>
            <nav className={ classes.navigationPanel }>
                <Link className={ classes.navigationLink } to='/pokemon'>
                    Pokemon collection
                </Link>
            </nav>
        </Container>
    )
}