import { Component } from "react";
import React from "react";
import Card from "../../Components/Card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: [],
      loading: true,
      visible: 8,
      valorInput: "",
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=541bfa5aac0dd7cf0e6ec5eaec4a926b&language=es-ES")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ pelicula: data.results, loading: false })
      )
      .catch(() => this.setState({ pelicula: [], loading: false }));
  }

  cargarMas = () => {
    this.setState({
      visible: this.state.visible + 4
    });
  };

  manejarInput = (e) => {
    this.setState({
      valorInput: e.target.value,
      visible: 8, 
    });
  };

  render() {
    const { pelicula, loading, valorInput, visible } = this.state;

    const query = valorInput.toLowerCase();
    const listaFiltrada = pelicula.filter((p) => {
      const nombre = (p.title).toLowerCase();
      return nombre.includes(query);
    });

    return (
      <React.Fragment>
        <h1>Próximas películas</h1>

        <input
          onChange={this.manejarInput}
          value={valorInput}
          placeholder="Filtrar por título"
        />

        <section className="cards">
          {loading ? (
            <p>Cargando…</p>
          ) : listaFiltrada.length ? (
            listaFiltrada
              .filter((pelicula, i) => i < visible)
              .map((unaPelicula) => (
                <Card key={unaPelicula.id} data={unaPelicula} />
              ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </section>

            <div >
            <button type="button" onClick={this.cargarMas}>
              Cargar más
            </button>
          </div>
        
      </React.Fragment>
    );
  }
}

export default Home;
