import React, {Component} from "react"
import Card from "../../Components/Card/Card"

class Results extends Component {
    constructor(props) {
        super(props)
        this.state ={
            resultados: [],
            loading: true
        }
    }

    componentDidMount(){
        this.buscarPeliculas()
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.query !== this.props.match.params.query){
            this.buscarPeliculas()
        }
    }


    buscarPeliculas() {
        const query = this.props.match.params.query

         fetch(`https://api.themoviedb.org/3/search/movie?api_key=541bfa5aac0dd7cf0e6ec5eaec4a926b&query=${query}&language=es-US`)
            .then(res => res.json())
            .then(data => {
                this.setState({ 
                    resultados: data.results, 
                    loading: false 
                });
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render (){

        return (
            <React.Fragment>
                <h2>Resultados de tu busqueda: "{this.props.match.params.query}"</h2>

                {this.state.loading && <p>Cargando resultados...</p>}
                 <section className="cards">
                    {!this.state.loading && this.state.resultados.map(pelicula => (
                        <Card key={pelicula.id} data={pelicula} />
                    ))}
                </section>

                   {!this.state.loading && this.state.resultados.length === 0 && (
                    <p><strong>No se encontraron películas para "{this.props.match.params.query}"</strong></p>
                )}


            </React.Fragment>
        )   
    }
}

export default Results;
