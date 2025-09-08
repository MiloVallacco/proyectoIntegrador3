import { Component } from "react";
import React from "react";
import Card from "../../Components/Card/Card";

// Aca abajo creamos un componente con estado
// el loading es porque corre antes el map y no llega a bajar la api asi que se hace ese todo eso del loading
class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            data=[]
            loading = true,
        }

    }

    componentDidMount(){
        fetch('FALTA LINKEAR LA API, NO LO HICE PORQUE NOSE COMO SE HACE CN LA KEY PERO ACA IRIA LA URL')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({data:data, loading:false}) 
            //el setstate permite poner informacion en el estado
        })
    }


//aca abajo usamos el react . framgment porque en el return vos solo podes devolver un solo paquete de html entonces react. fragment te une todo seria como un div pero no se puede usar el div xq estarias devolviedno muchas cosas html 
   //la lina de abajo de donde arranca el section es un if en otra forma. seria una condicion signo de pregunta seria si fuese true lo que le sigue al signo de pregunta si es false lo que le sigue a los dos puntos
    render(){
        return(
        <React.Fragment>
            <h1>Todas las peliculas</h1>
            <section>
                {this.state.loading ? <p>Cargando....</p>: this.state.data.'LO QUE SEA EN LA API DEBE SER RESULTS O ALGO ASI'.map(unaPelicula => .map(unaPelicula => <Card data={unaPelicula} />)
                )}
                
                
            </section>
        </React.Fragment>
        )
    }

}

export default Home;