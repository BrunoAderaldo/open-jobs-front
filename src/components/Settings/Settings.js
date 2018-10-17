import React, { Component } from "react";

import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Headerbar from "../Headerbar/Headerbar";

class Settings extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      username: "",
      userbio: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    try {
      console.log(e);
    } catch (error) {
      this.setState({ error: error.response.data.error });
    }
  }

  render() {
    return (
      <div className="app-view">
        <Sidebar />
        <Headerbar />
        <div className="page">
          <div className="page__content">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h2 className="page__title">Configurações</h2>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <h4 className="card-title card-title-divider">Detalhes do perfil</h4>
                        {/* FOTO DO PERFIL, NOME, USERNAME, BIO */}

                        <div className="form-group">
                          <label htmlFor="name" className="control-label">Nome</label>
                          <input id="name" type="text" className="form-control" name="name" placeholder="Bruno Aderaldo" required value={this.state.name} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                          <label htmlFor="username" className="control-label">Seu nome de usuário</label>
                          <input id="username" type="text" className="form-control" name="username" placeholder="brunoaderaldo" required value={this.state.username} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                          <label htmlFor="userbio" className="control-label">Bio</label>
                          <textarea id="userbio" rows="2" className="form-control" name="userbio" placeholder="Design de produto e identidade de marca visual. Clientes: Adobe, Xero, Opera, Tile" value={this.state.userbio} required onChange={this.handleChange}></textarea>
                        </div>

                        <div className="form-actions">
                          <button type="button" className="btn btn-link mr-2">Cancelar</button>
                          <button type="submit" className="btn btn-primary">Salvar</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
