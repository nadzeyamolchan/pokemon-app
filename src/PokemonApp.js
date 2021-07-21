import {ThemeProvider} from "@material-ui/core/";
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {Switch, Route} from 'react-router-dom';
import {ErrorBoundary} from "./error/ErrorBoundary";
import {theme} from "./theme";

import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import PokemonTablePage from "./pages/PokemonTablePage/PokemonTablePage";
import Homepage from "./pages/Homepage/Homepage";
import React from "react";

function PokemonApp() {
    return (
      <ScopedCssBaseline>
        <ErrorBoundary>
          <ThemeProvider theme={theme}>
            <Header />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/pokemon" component={PokemonTablePage} />
            </Switch>
            <Footer />
          </ThemeProvider>
        </ErrorBoundary>
      </ScopedCssBaseline>
    );
}

export default PokemonApp;