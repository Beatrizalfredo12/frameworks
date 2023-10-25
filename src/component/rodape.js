import React, { Component } from 'react';
import './noticiaCard/rodape.css'; 

class Rodape extends Component {
  render() {
    return (
      <div className="Rodape">
        <div className="Rodape-contact">
          <p>Telefone: (123) 456-7890</p>
        </div>
        <div className="Rodape-title">
          <h1>Portal Notícia</h1>
          <p>IFMS Dourados – Trabalho de Frameworks2 – Prof. Ricardo</p>
        </div>
        <div className="Rodape-name">
          <p>BEATRIZ RODRIGUES ALFREDO</p>
        </div>
      </div>
    );
  }
}

export default Rodape;
