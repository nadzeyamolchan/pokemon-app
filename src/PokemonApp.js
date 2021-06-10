import PokemonsTable from "./components/table/PokemonsTable.component";
import {ErrorBoundary} from "./error/ErrorBoundary";
import {theme} from "./theme";
import {ThemeProvider} from "@material-ui/core";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function PokemonApp() {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <Header/>
            <PokemonsTable/>
                <Footer/>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default PokemonApp;