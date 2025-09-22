import React, { Component } from "react";
import { Link } from "react-router-dom";
import './card.css';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mostrarDescripcion: false,
        esFavorito: false
      };
    }
  
    activarDescripcion = () => {
      this.setState({
        mostrarDescripcion: this.state.mostrarDescripcion ? false : true
      });
    }
    componentDidMount() {
      this.verificarFavorito();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.data.id !== this.props.data.id) {
        this.verificarFavorito();
      }
    }

    verificarFavorito() {
      const id = this.props.data.id;
      let datosEnLocalStorage = localStorage.getItem("LSFavoritos");
      
      if (datosEnLocalStorage !== null) {
        let favoritos = JSON.parse(datosEnLocalStorage);
        let estaEnFavoritos = favoritos.includes(id);
        
        this.setState({
          esFavorito: estaEnFavoritos
        });
      }
    }
  
    agregarFavoritos(){
        const id = this.props.data.id;
        let favoritos = [];

        let datosEnLocalStorage = localStorage.getItem("LSFavoritos");
        if (datosEnLocalStorage !== null){
            favoritos = JSON.parse(datosEnLocalStorage);
        }

        if (!favoritos.includes(id)) {
          favoritos.push(id);
          localStorage.setItem("LSFavoritos", JSON.stringify(favoritos));
          this.setState({
              esFavorito: true
          });

          if (this.props.onFavoritoChange) {
            this.props.onFavoritoChange(id, true);
          }
        }
    }

    eliminarDeFavoritos(){
        const id = this.props.data.id;
        let favoritos = [];

        let datosEnLocalStorage = localStorage.getItem("LSFavoritos");
        if (datosEnLocalStorage !== null){
            favoritos = JSON.parse(datosEnLocalStorage);
        }

        favoritos = favoritos.filter(favId => favId !== id);
        localStorage.setItem("LSFavoritos", JSON.stringify(favoritos));
        this.setState({
            esFavorito: false
        });

        if (this.props.onFavoritoChange) {
          this.props.onFavoritoChange(id, false);
        }
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
            onClick={this.activarDescripcion}
            >
            {this.state.mostrarDescripcion ? "Ocultar descripción" : "Ver descripción"}
            </button>

          <Link to={`/detalle/${data.id}`} className="btn btn-primary">
            Ver más
          </Link>
          
          {this.state.esFavorito ?
            <button className="btn alert-primary" onClick={() => this.eliminarDeFavoritos()}>
             ❤️ Quitar de favoritos
            </button>
            :
            <button className="btn alert-primary" onClick={() => this.agregarFavoritos()}>
              🤍 Agregar a favoritos
            </button>
          }
        </div>
      </article>
    );
  }
}

export default Card;