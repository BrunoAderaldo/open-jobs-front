import React, { Component } from 'react';
import './Navbar.css';

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
                      <li className="navbar__menu-item">All Jobs</li>
                    </ul>
                  </div>
                  <div className="navbar__actions">
                    <span>Login</span>
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
