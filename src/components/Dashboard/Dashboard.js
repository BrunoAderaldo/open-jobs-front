import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Headerbar from "../Headerbar/Headerbar";

import imgDashboard from '../../../src/images/dashboard.svg';

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
                <div className="col">
                  <div className="status-page">
                    <img src={imgDashboard} className="status-page__img" alt="Imagem representando um dashboard"/>
                    <p className="status-page__message text-dark">Estamos construindo um Dashboard perfeito pra você, aguarde!</p>
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
