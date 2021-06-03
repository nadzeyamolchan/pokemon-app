import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';


class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: []
        };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
            .then(response => response.json())
            .then(data => {
                let results = data.results;
                let promisesArray = results.map(result => {
                    return fetch(result.url).then(response => response.json());
                })
                return Promise.all(promisesArray);
            }).then((data) => this.setState({ pokemons: data }, () => console.log('Main Pokemon State: ', this.state.pokemons)));
    }

    render() {
        return (
            <ErrorBoundary>
                <CardList pokemons={this.state.pokemons}/>
            </ErrorBoundary>
        );
    }
}

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
export default App;