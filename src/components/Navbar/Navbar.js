import React, { Component } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar__wrapper">
                <div className="navbar__content">
                  <div className="navbar__logo">
                    <h1 className="navbar__logo-text">Open Jobs</h1>
                  </div>
                  <div className="navbar__menu">
                    <ul className="navbar__menu-list">
                      <li className="navbar__menu-item">
                        <Link to="/projects">All jobs</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__actions">
                    <Link to="/sign-in" className="btn btn-primary">Login</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
