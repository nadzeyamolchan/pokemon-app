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

export const PokemonApp = (isAuthenticated) => {
    /*isAuthenticated = false;*/
    return (
      <ScopedCssBaseline>
        <ErrorBoundary>
          <ThemeProvider theme={theme}>
            <Header />
              {isAuthenticated ? (
                  <Switch>
                      <Route exact path="/" component={Homepage} />
                      <Route exact path="/pokemon" component={PokemonTablePage} />
                      <Redirect to="/" />
                  </Switch>
              )  : (
                  <Switch>
                      <Route exact path="/" component={Homepage} />
                      <Redirect to="/" />
                  </Switch>
              ) }
            <Footer />
          </ThemeProvider>
        </ErrorBoundary>
      </ScopedCssBaseline>
    );
}