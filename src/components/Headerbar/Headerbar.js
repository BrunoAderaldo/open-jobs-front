import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import "./Headerbar.css";

import { Link, withRouter } from "react-router-dom";
import { getLoggedUser, logout } from "../../services/auth";

class Headerbar extends Component {
  handleLogout() {
    logout();
    this.props.history.push("/auth/sign-in");
  }

  render() {
    const user = getLoggedUser();

    return (
      <header className="headerbar">
        <div className="container-fluid">
          <div className="row justify-content-end px-3 py-2">
            <nav>
              <ul className="nav d-flex align-items-center">
                <li className="nav-item dropdown">
                  <button type="button" className="btn btn-link no-caret p-0 nav-link dropdown-toggle d-flex align-items-center mr-3" data-toggle="dropdown">
                    <MaterialIcon icon="notifications" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <span>Sem notificações</span>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <button type="button" className="btn btn-link no-caret p-0 nav-link dropdown-toggle d-flex align-items-center" data-toggle="dropdown">
                    <MaterialIcon icon="account_circle" size={32} />
                    <span className="text-dark ml-2">{user.email}</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right px-0">
                    <Link to={`/${user._id}`} className="dropdown-item with-icon d-flex align-items-center px-2">
                      <MaterialIcon icon="account_box" />
                      <span>Perfil</span>
                    </Link>
                    <button type="button" className="btn dropdown-item with-icon d-flex align-items-center px-2" onClick={this.handleLogout.bind(this)}>
                      <MaterialIcon icon="exit_to_app" />
                      <span>Sair</span>
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Headerbar);
