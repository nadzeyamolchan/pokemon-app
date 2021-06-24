import {Component} from "react";
import {Container} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";

export class ErrorBoundary extends Component {
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
                <Container maxWidth='md'>

                    <Alert severity="error">
                        <AlertTitle>Ooops! Something went wrong :(</AlertTitle>
                        {this.state.error && this.state.error.toString()}
                        {<details>
                            <summary>Get more info</summary>
                            <br/>
                            {this.state.errorInfo.componentStack}
                        </details>}
                    </Alert>

                </Container>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}