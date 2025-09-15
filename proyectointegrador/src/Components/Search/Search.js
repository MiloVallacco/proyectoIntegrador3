import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    actualizarBusqueda = (event) => {
        this.setState({ query: event.target.value });
    }

    ejecutarBusqueda = (event) => {
        event.preventDefault();
        if (this.state.query) {
            this.props.history.push(`/searchResults/${this.state.query}`);
        }
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.ejecutarBusqueda} >
                <input
                    type="text"
                    placeholder="Buscar películas..."
                    value={this.state.query}
                    onChange={this.actualizarBusqueda}
                />
                <button type="submit">Buscar</button>
            </form>
        );
    }
}

export default withRouter(Search);