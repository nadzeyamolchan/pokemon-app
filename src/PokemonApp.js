import React from "react";
import { ThemeProvider } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { Redirect, Switch } from "react-router-dom";
import { ErrorBoundary } from "./error/ErrorBoundary";
import { theme } from "./theme";

import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

import PrivateRoute from "./routes/Private";
import PublicRoute from "./routes/Public";

import PokemonTablePage from "./pages/PokemonTablePage/PokemonTablePage";
import Homepage from "./pages/Homepage/Homepage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

export const PokemonApp = () => {
  return (
    <ScopedCssBaseline>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <PublicRoute
              restricted={false}
              component={Homepage}
              path="/"
              exact
            />
            <PublicRoute
              restricted={true}
              component={SignInPage}
              path="/signin"
              exact
            />
            <PublicRoute
              restricted={true}
              component={SignUpPage}
              path="/signup"
              exact
            />
            <PrivateRoute component={PokemonTablePage} path="/pokemon" exact />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </ThemeProvider>
      </ErrorBoundary>
    </ScopedCssBaseline>
  );
};