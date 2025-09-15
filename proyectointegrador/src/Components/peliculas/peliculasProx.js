import React, { Component } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: [],
            loading: true,
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=541bfa5aac0dd7cf0e6ec5eaec4a926b')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ pelicula: data.results, loading: false });
                
            });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Proximos Estrenos</h1> <Link to="/estrenos" >Ver todas</Link>

                <section className="cards">
                    {this.state.loading ? <p>Cargando....</p> : this.state.pelicula.filter((peliculas, i) => i < 8).map(unaPelicula => <Card key={unaPelicula.id} data={unaPelicula} />)}
                </section>
            </React.Fragment>
        );
    }
}

export default Peliculas;


