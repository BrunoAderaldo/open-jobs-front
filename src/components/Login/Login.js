import React, { Component } from 'react';
import './Login.css';

import api from "../../services/api";
import { isAuthenticated, login } from "../../services/auth";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      error: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (isAuthenticated) {
      this.props.history.push('/');
    }
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      const response = await api.post('auth/sign-in', { email, password });

      const { user, token } = response.data;

      login(token, user);

      this.props.history.push('/');
    } catch (error) {
      this.setState({ error: error.response.data.error });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-6">
            <div className="login">
              <div className="login__message">Olá, bem vindo de volta</div>
              <div className="login__sub-message">Entre na sua conta aqui.</div>
              { !!this.state.error && <h4>{ this.state.error }</h4> }

              <div className="login__form">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>

                  <div className="form-group">
                    <label htmlFor="email" className="control-label">E-Mail</label>
                    <input id="email" type="email" className="form-control" name="email" placeholder="usuario@email.com" required autoFocus value={this.state.email} onChange={this.handleChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="control-label">Senha</label>
                    <input id="password" type="password" minLength="6" className="form-control" name="password" placeholder="sua senha" required value={this.state.password} onChange={this.handleChange} />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
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
