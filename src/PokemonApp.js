import {Component} from 'react';
/*import {CardList} from './components/card-list/card-list.component';*/
import {CustomPaginationActionsTable} from './components/table/table.component';
import axios from "axios";

class PokemonApp extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: []
        };
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10',
            {
                params: {
                    offset: 20,
                    limit: 20
                }
            })
            .then(response => this.setState({pokemons: response.data.results}));
    }

    render() {
        return (
            <ErrorBoundary>
                <CustomPaginationActionsTable pokemons={this.state.pokemons}/>
            </ErrorBoundary>
        );
    }
}

/*<CardList pokemons={this.state.pokemons}/>*/

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {error: null, errorInfo: null};
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path, render error UI
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    {<details style={{whiteSpace: 'pre-wrap'}}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>}
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}
export default PokemonApp;