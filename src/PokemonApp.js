import PokemonsTable from "./components/table/PokemonsTable.component";
import {ErrorBoundary} from "./error/ErrorBoundary";

function PokemonApp() {
    return (
        <ErrorBoundary>
            <PokemonsTable/>
        </ErrorBoundary>
    );
}

export default PokemonApp;