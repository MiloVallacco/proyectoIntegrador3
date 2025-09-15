import React from 'react';
import Peliculas from '../../Components/peliculas/peliculasProx'
import Peliculastop from '../../Components/peliculas/peliculasTop';
import Search from '../../Components/Search/Search';
function Home() {
    return (
        <div>
            <h1>Bienvenido a la cartelera de peliculas</h1>
            <Search />
            <Peliculas />
            <Peliculastop />
        </div>
    );
}

export default Home;
