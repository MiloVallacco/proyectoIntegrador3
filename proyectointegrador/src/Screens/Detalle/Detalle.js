import React, { Component } from "react";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: [],
            loading: true,
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=541bfa5aac0dd7cf0e6ec5eaec4a926b`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    pelicula: data,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <h2 className="titulo">{this.state.pelicula.title}</h2>
                    <img className="portada"
                        src={`https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title}
                    />
                    <p className="rating">Rating: {this.state.pelicula.vote_average}</p>
                    <p className="fechaEstreno">Fecha de estreno: {this.state.pelicula.release_date}</p>
                    <p className="duración">Duración: {this.state.pelicula.runtime} </p>
                    <p className="sinopsis">Sinópsis: {this.state.pelicula.overview}</p>
                    <p className="genero">Género: {this.state.pelicula.genres?.map(genre => genre.name)}</p>
                </main>
            </React.Fragment>
        );
    }
}

export default Detalle;