import React, { Component } from 'react';
import './App.css'

class App extends Component {
  state = {
    noticias: [],
  };

  componentDidMount() {
    fetch('http://portal-noticias-ifms.herokuapp.com/apinoticias')
      .then(response => response.json())
      .then(noticias => {
        this.setState({ noticias });
      })
      .catch(error => console.error('API request error:', error));
  }
  

  render() {
    const { noticias } = this.state;

    return (
      <div className="container">
        <h1>Latest News</h1>
        <div className="noticias">
          {noticias.map((noticia) => (
            <div key={noticia.id_noticia} className="noticia">
              <div className="noticia-content">
                <h2>{noticia.titulo}</h2>
                <p>{noticia.resumo}</p>
                <p>Published: {noticia.data_criacao}</p>
                <p>Author: {noticia.autor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
