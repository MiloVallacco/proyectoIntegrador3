
import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <div className="container">
        <h1>UdeSA Movies</h1>

        <nav>
          <ul className="nav nav-tabs my-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top">Mejores Valoradas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/estrenos">Proximos estrenos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">Favoritas</Link>
            </li>
          </ul>

            
        </nav>
      </div>
    </header>
  );
}

export default Header;
