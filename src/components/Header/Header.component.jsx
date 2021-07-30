import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import headerStyle from "./Header.style";
import {actionTypes} from "../../redux/actionTypes";

export default function Header() {
    const classes = headerStyle();
    const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        localStorage.removeItem("token");
        dispatch({type: actionTypes.LOG_OUT});
    };

    return (
        <header className={classes.headerWrapper}>
            <Link to="/">
                <div className="logo-wrapper">
                    <img
                        className="pokemon-logo"
                        src={process.env.PUBLIC_URL + "/pokemon-logo.svg"}
                        alt="pokemon-logo"
                    />
                </div>
            </Link>

            {isAuthenticated ? (
                <nav>
                    <Link className={classes.navigationLink} to="/pokemon">
                        Pokemon collection
                    </Link>
                    <Link
                        className={classes.navigationLink}
                        to="/signin"
                        onClick={handleLogOut}
                    >
                        Log out
                    </Link>
                </nav>
            ) : null}
        </header>
    );
}