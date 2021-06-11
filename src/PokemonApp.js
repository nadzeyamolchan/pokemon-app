
import {ErrorBoundary} from "./error/ErrorBoundary";
import {theme} from "./theme";
import {ThemeProvider} from "@material-ui/core";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import PokemonTablePage from "./pages/pokemon-table-page/pokemon-table-page.component";

function PokemonApp() {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <Header/>
                    <PokemonTablePage/>
                <Footer/>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default PokemonApp;