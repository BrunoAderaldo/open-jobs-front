import React, { Component } from "react";

import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Headerbar from "../Headerbar/Headerbar";

class Dashboard extends Component {
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
                  <h2 className="page__title">Dashboard</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <Link to="/settings" className="btn btn-light">Go somewhere</Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <Link to="#" className="btn btn-light">Go somewhere</Link>
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

export default Dashboard;
