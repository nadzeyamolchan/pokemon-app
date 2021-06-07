import {Component} from 'react';
import {CustomPaginationActionsTable} from './components/table/PokemonsTable.component';
import {ErrorBoundary} from "./error/ErrorBoundary";

class PokemonApp extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: []
        };
    }

    render() {
        return (
            <ErrorBoundary>
                <CustomPaginationActionsTable pokemons={this.state.pokemons}/>
            </ErrorBoundary>
        );
    }
}

export default PokemonApp;