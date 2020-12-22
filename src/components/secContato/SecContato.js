import React from 'react';
import './SecContato.css';

function SecContato() {
  return (
    <div className="secao-contato">
      <div id="input-secao-contato"></div>
      <div id="informacao-secao-contato">
        <div id="loja-informacao-secao-contato">
          <p className="titulo-loja-informacao">Malu Modas</p>
          <p className="texto-loja-informacao">Endereço: Avenida 22 de novembro, 95 - Fonseca - Niteroi - RJ</p>
          <p className="texto-loja-informacao">Whatsapp: (48) 99665-1629</p>
          <p className="texto-loja-informacao">Email: leonardodefreitas1995@yahoo.com.br</p>
        </div>
        <div id="horario-informacao-secao-contato">
          <p className="titulo-loja-informacao">Horario de Funcionamento</p>
          <p className="texto-loja-informacao">Segunda a Sabado de 09:00 as 18:00</p>
          <p className="texto-loja-informacao">Domingo de 09:00 as 12:00</p>
        </div>
      </div>
    </div>
  )
}

export default SecContato;