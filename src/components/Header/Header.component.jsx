import React from "react";
import {Link} from 'react-router-dom';
import headerStyle from "./Header.style";
import {useDispatch} from "react-redux";
import {actionTypes} from "../../redux/actionTypes";

export default function Header() {
    const classes = headerStyle();
    const dispatch = useDispatch();

    const handleDownloadPokemonWindow = () => {
       dispatch({
           type: actionTypes.TOGGLE_DOWNLOAD_POKEMON_MODAL_WINDOW
       })
    }

    return (
        <header className={classes.headerWrapper}>
            <Link to='/'>
                <div className="logo-wrapper">
                    <img className="pokemon-logo" src={process.env.PUBLIC_URL + '/pokemon-logo.svg'}
                         alt='pokemon-logo'/>
                </div>
            </Link>
            <nav className={classes.navigationPanel}>
                <Link className={classes.navigationLink} to='' onClick={handleDownloadPokemonWindow}>
                    Download collection
                </Link>
                <Link className={classes.navigationLink} to='/pokemon'>
                    To pokemon collection
                </Link>
            </nav>
        </header>
    )
}