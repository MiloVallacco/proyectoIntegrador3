import React from 'react';
import Peliculas from '../../Components/peliculas/peliculasProx'
import Peliculastop from '../../Components/peliculas/peliculasTop';

function Home() {
    return (
        <div>
            <h1>Bienvenido a la cartelera de peliculas</h1>
            <Peliculas />
            <Peliculastop/>
        </div>
    );
}

export default Home;
