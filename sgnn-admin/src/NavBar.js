import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return(
    <header className = "navbar">
      <ul>
        <li className = "logo">
          <a href = "/">
            <p>SGNN</p>
          </a>
        </li>
        <li>
          <Link to = "/">Home</Link>
          <Link to = "/articles">Articles</Link>
          <Link to = "/journalists">Journalists</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;
