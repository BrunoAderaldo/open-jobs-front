import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-6">
            <div className="login">
              <div className="login__message">Olá, bem vindo de volta</div>
              <div className="login__sub-message">Entre na sua conta aqui.</div>

              <div className="login__form">
                <form className="form-horizontal" method="POST">

                  <div className="form-group">
                    <label htmlFor="email" className="control-label">E-Mail Address</label>
                    <input id="email" type="email" className="form-control" name="email" placeholder="usuario@email.com" required autoFocus />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="control-label">Senha</label>
                    <input id="password" type="password" className="form-control" name="password" placeholder="sua senha" required />
                  </div>

                  <div className="form-group form-check">
                    <input type="checkbox" id="check-remember" name="remember" className="form-check-input" />
                    <label className="form-check-label" htmlFor="check-remember">Lembre de mim</label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    Login
                  </button>

                  <a className="btn btn-link btn-block text-center">Esqueci a senha</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
