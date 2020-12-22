import React from 'react';
import './SecSobre.css';
import imagenSobre from '../../assets/img/pexels-img/sobre.jpg';

function SecSobre() {
  return (
    <div className="secao-sobre">
      <img src={imagenSobre} alt="imagen sobre" />
      <div id="texto-secao-sobre">
        <p id="titulo-secao-sobre">Sobre</p>
        <p id="complemento-secao-sobre">Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé, boa gentis num é. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga.</p>
      </div>
    </div>
  )
}

export default SecSobre;
