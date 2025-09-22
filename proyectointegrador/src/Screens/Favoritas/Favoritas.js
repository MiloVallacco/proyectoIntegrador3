import Card from "../../Components/Card/Card"
import React, { Component } from "react"

class Favoritas extends Component {
    constructor(){
        super()
        this.state = {
            personajesFavoritos: []
        }
    }

    componentDidMount(){
        this.cargarFavoritos();
    }

    cargarFavoritos = () => {
        let listaIdFavoritos = []
        let datosEnLocalStorage = localStorage.getItem("LSFavoritos")
        if(datosEnLocalStorage !== null){
            listaIdFavoritos = JSON.parse(datosEnLocalStorage)
            let listaIdFavoritosAux = []

            listaIdFavoritos.map(ID => {
                fetch("https://api.themoviedb.org/3/movie/" + ID + "?api_key=541bfa5aac0dd7cf0e6ec5eaec4a926b")
                .then(response => response.json())
                .then(data => {
                    listaIdFavoritosAux.push(data)
                    this.setState({
                        personajesFavoritos: listaIdFavoritosAux
                    })
                })
                .catch(error => console.log(error))
            }) 
        }
    }

    manejarCambioFavorito = (peliculaId, agregada) => {
        if (!agregada) {
            this.setState(prevState => ({
                personajesFavoritos: prevState.personajesFavoritos.filter(
                    personaje => personaje.id !== peliculaId
                )
            }))
        }
    }

    render(){
        return (
            <React.Fragment>
                <main className="container">
                     <h2>Películas Favoritas</h2>
                     <section className="cards">
                        {this.state.personajesFavoritos.map((personaje, idx) => 
                            <Card 
                                key={idx} 
                                data={personaje} 
                                onFavoritoChange={this.manejarCambioFavorito}
                            />
                        )}
                    </section>
                </main>
            </React.Fragment>
        )
    }
}

export default Favoritas;