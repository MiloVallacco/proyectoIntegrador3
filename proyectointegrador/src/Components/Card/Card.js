import { Component } from "react";

class Card extends Component {

    constructor(props){
        super(props);
        this.state={
            
        }

    }

    componentDidMount(){
       
    }



    render(){
        return(
        <React.Fragment>
            <article>
                 <h1>{this.props.data.name}</h1>
                 <img src={this.props.data.image} alt="pelicula"/>
            </article>
        </React.Fragment>
        )
    }

}

export default Card;