import {ThemeProvider} from "@material-ui/core";
import {Switch, Route} from 'react-router-dom';
import {ErrorBoundary} from "./error/ErrorBoundary";
import {theme} from "./theme";

import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import PokemonTablePage from "./pages/PokemonTablePage/PokemonTablePage";
import Homepage from "./pages/Homepage/Homepage";
import PokemonCardPage from "./pages/PokemonCardPage/PokemonCardPage"
import TestApp from "./components/PokemonCard(modal)/test";

function PokemonApp() {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/pokemon' component={PokemonTablePage}/>
                    <Route path='/pokemon/:id' component={PokemonCardPage}/>
                </Switch>
                <Footer/>
                <TestApp/>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default PokemonApp;