import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
             isAuthenticated && restricted ?
                <Redirect to="/" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;