import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {

            hasError: false
        }
    }
    // life cycle hook
    componentDidCatch(error, info) {
        this.setState({ hasError: true })


    }
    render() {
        if (this.state.hasError) {
            return <h1>Oops! That is not good!</h1>

        }
        return this.props.children
    }
}



export default ErrorBoundry;