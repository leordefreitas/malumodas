import React from 'react';
import './SecChamativa.css';
import imagenChamativa from '../../assets/img/pexels-img/pexels-artem-beliaikin-2534965.jpg';

function SecChamativa() {
  return (
    <div className="secao-chamativa">
      <div className="texto-secao-chamativa">
        <p id="titulo-secao-chamativa">Malu Modas</p>
        <p id="complemento-secao-chamativa">
          Babozeiras e bobagens vai estudar meu filho, eu nao acreditei na minha mae
        </p>
      </div>
      <img src={imagenChamativa} alt="imagen secao chamativa" />
    </div>
  )
}

export default SecChamativa;
