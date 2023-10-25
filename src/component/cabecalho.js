import { Component } from 'react';
import './noticiaCard/cabecalho.css'
import logo from '../logotop.png'

class Cabecalho extends Component {
  render() {
    return (
      <div className="Cabecalho">
        <img src={logo} alt="Logotipo" />
        <h1>Portal Notícia</h1>
        <p className="Cabecalho-welcome">Seja bem-vindo</p>
      </div>
    );
  }
}

export default Cabecalho;

