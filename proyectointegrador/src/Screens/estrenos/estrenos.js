import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";

class Estrenos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: [],
      loading: true,
      visible: 8,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=541bfa5aac0dd7cf0e6ec5eaec4a926b"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ pelicula: data.results, loading: false });
      });
  }

  cargarMas = () => {
    this.setState({
      visible: this.state.visible + 4, 
    });
  };

  render() {
    

    
      
        let botonCargarMas = (
          <div style={{ marginTop: 20 }}>
            <button onClick={this.cargarMas}>Cargar más</button>
          </div>
        );
      
    

    return (
      <React.Fragment>
        <h1>Próximos Estrenos</h1>

        <section className="cards">
          {this.state.loading ? (
            <p>Cargando....</p>
          ) : (
            this.state.pelicula
              .filter((pelicula, i) => i < this.state.visible)
              .map((unaPelicula) => (
                <Card key={unaPelicula.id} data={unaPelicula} />
              ))
          )}
        </section>

        {botonCargarMas}
      </React.Fragment>
    );
  }
}

export default Estrenos;
