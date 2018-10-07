import React, { Component } from 'react';
import Home from 'react-feather/dist/icons/home';
import Folder from 'react-feather/dist/icons/folder';
import User from 'react-feather/dist/icons/user';
import "./Sidebar.css";

import { NavLink } from "react-router-dom";
import { getLoggedUser } from "../../services/auth";

class Sidebar extends Component {
  render() {
    const user = getLoggedUser();

    return (
      <aside className="sidebar">
        <h1 className="mb-2 text-center">OpenJobs</h1>
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link sidebar__link d-flex align-items-center">
                <Home className="mr-2" size={18} />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link sidebar__link d-flex align-items-center">
                <Folder className="mr-2" size={18} />
                <span>Procurar Projetos</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/${user._id}`} className="nav-link sidebar__link d-flex align-items-center">
                <User className="mr-2" size={18} />
                <span>Perfil</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
