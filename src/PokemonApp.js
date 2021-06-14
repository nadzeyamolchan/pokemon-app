
import {ErrorBoundary} from "./error/ErrorBoundary";
import {theme} from "./theme";
import { ThemeProvider } from "@material-ui/core";
import {Switch, Route} from 'react-router-dom';

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import PokemonTablePage from "./pages/pokemon-table-page/pokemon-table-page.component";
import Homepage from "./pages/homepage/homepage";
import PokemonCardPage from "./pages/pokemon-card-page/pokemon-card-page"

function PokemonApp() {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/pokemon' component={PokemonTablePage}/>
                    <Route path='/pokemon/:name' component={PokemonCardPage}/>
                </Switch>
                <Footer/>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default PokemonApp;