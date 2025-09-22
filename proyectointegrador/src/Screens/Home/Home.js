import React from 'react';
import Peliculas from '../../Components/Peliculas/PeliculasProx'
import Peliculastop from '../../Components/Peliculas/PeliculasTop';
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
