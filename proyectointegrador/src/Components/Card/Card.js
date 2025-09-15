import React, { Component } from "react";
import { Link } from "react-router-dom";
import './card.css';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mostrarDescripcion: false,
      };
      this.activarDescripcion = this.activarDescripcion.bind(this);
    }
  
    activarDescripcion() {
      this.setState({ mostrarDescripcion: !this.state.mostrarDescripcion });
    }
  render() {
    const { data } = this.props;
    const poster = `https://image.tmdb.org/t/p/w342${data.poster_path}`;

    return (
      <article className="single-card-movie">
        <img
          src={poster}
          alt={data.title}
          className="card-img-top"
        />
        <div className="cardBody">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">
            {this.state.mostrarDescripcion ? data.overview : ""}
            </p>

            <button 
            className="btn btn-secondary" 
            onClick={() => this.setState({ mostrarDescripcion: !this.state.mostrarDescripcion })}
            >
            {this.state.mostrarDescripcion ? "Ocultar descripción" : "Ver descripción"}
            </button>

          <Link to={`/detalle/${data.id}`} className="btn btn-primary">
            Ver más
          </Link>
          <button className="btn alert-primary">🩶</button>
        </div>
      </article>
    );
  }
}

export default Card;
