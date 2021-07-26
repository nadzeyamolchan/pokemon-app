import {ThemeProvider} from "@material-ui/core/";
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ErrorBoundary} from "./error/ErrorBoundary";
import {theme} from "./theme";

import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import PokemonTablePage from "./pages/PokemonTablePage/PokemonTablePage";
import Homepage from "./pages/Homepage/Homepage";
import React from "react";
import LoginPage from "./pages/Login/Login";
import {useSelector} from "react-redux";

export const PokemonApp = () => {
    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    return (
      <ScopedCssBaseline>
        <ErrorBoundary>
          <ThemeProvider theme={theme}>
            <Header />
              {isAuthenticated ? (
                  <Switch>
                      <Route exact path="/" component={Homepage} />
                      <Route exact path="/pokemon" component={PokemonTablePage} />
                      <Redirect to="/login" />
                  </Switch>
              )  : (
                  <Switch>
                      <Route exact path="/login" component={LoginPage} />
                      <Redirect to="/login" />
                  </Switch>
              ) }
            <Footer />
          </ThemeProvider>
        </ErrorBoundary>
      </ScopedCssBaseline>
    );
}