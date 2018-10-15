import React, { Component } from "react";
import "./Profile.css";

import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Headerbar from "../Headerbar/Headerbar";

import api from "../../services/api";
import { getLoggedUser } from "../../services/auth";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      projectsCount: ""
    };
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchUser(this.props.match.params.id);
    }
  }

  async fetchUser(id) {
    try {
      const response = await api.get(`/users/${id}`);
      const user = response.data.user[0];

      this.setState({
        name: user.name || "Sem nome",
        email: user.email,
        projectsCount: user.projects.length
      });

    } catch (error) {
      console.log(error.response);
    }
  }

  isMyProfile() {
    const userLoggedId = getLoggedUser()._id;

    if (userLoggedId === this.props.match.params.id) {
      return (
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/users/settings" className="btn btn-primary">Editar Perfil</Link>
          </div>
        </div>
      );
    } else {
      return null;
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
                  <h2 className="page__title">{this.state.name}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>{this.state.email}</h4>
                  <h5>{this.state.projectsCount}</h5>
                </div>
              </div>
              { this.isMyProfile() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
