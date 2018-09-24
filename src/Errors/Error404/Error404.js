import React, { Component } from 'react';
import './Error404.css';

import error404 from '../../images/404.svg';

class Error404 extends Component {
  render() {
    return (
      <div className="error">
        <img className="error__image" src={error404} alt="Imagem com uma nave espacial abduzindo um fantasminha" />
        <h2 className="error__status">404</h2>
        <h3 className="error__message">Página não encontrada</h3>
        <button type="button" className="btn btn-light error__action" onClick={this.props.history.goBack}>Não quero ser abduzido</button>
      </div>
    );
  }
}

export default Error404;
