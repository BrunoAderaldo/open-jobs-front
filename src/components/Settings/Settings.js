import React, { Component } from "react";

import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Headerbar from "../Headerbar/Headerbar";

class Settings extends Component {
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
                  <h2 className="page__title">Settings</h2>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h1>Settings</h1>
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
