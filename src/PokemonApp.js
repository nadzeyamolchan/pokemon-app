import { ThemeProvider } from "@material-ui/core/";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { Redirect, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "./error/ErrorBoundary";
import { theme } from "./theme";

import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import PokemonTablePage from "./pages/PokemonTablePage/PokemonTablePage";
import Homepage from "./pages/Homepage/Homepage";
import SignInPage from "./pages/SignInPage/SignInPage";
import React from "react";
import { useSelector } from "react-redux";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

export const PokemonApp = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  return (
    <ScopedCssBaseline>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Header />
          {isAuthenticated ? (
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/pokemon" component={PokemonTablePage} />
              <Redirect to="/login/signin" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/login/signin" component={SignInPage} />
              <Route exact path="/login/signup" component={SignUpPage} />
              <Redirect to="/login/signin" />
            </Switch>
          )}
          <Footer />
        </ThemeProvider>
      </ErrorBoundary>
    </ScopedCssBaseline>
  );
};