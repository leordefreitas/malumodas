import React from 'react';
import './SecGaleria.css';
import imagenGaleria1 from '../../assets/img/malumodas-img/galeria1.jpeg'
import imagenGaleria2 from '../../assets/img/malumodas-img/galeria2.jpeg'
import imagenGaleria3 from '../../assets/img/malumodas-img/galeria3.jpeg'

function SecGaleria() {
  return (
    <div className="secao-galeria">
      <p id="titulo-secao-galeria">Galeria</p>
      <div id="fotos-secao-galeria">
        <img src={imagenGaleria1} alt="imagen secao galeria 1" />
        <img src={imagenGaleria2} alt="imagen secao galeria 2" />
        <img src={imagenGaleria3} alt="imagen secao galeria 3" />
      </div>
    </div>
  )
}

export default SecGaleria;