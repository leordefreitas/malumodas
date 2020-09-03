import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="logo-links-header">
        <a className="logo-all" href="#">Malu Modas</a>
        <ul className="links-header">
          <li><a href="#">Galeria</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
