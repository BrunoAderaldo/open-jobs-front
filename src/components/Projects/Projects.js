import React, { Component } from "react";
import moment from "moment";
import "./Projects.css";
import Clock from 'react-feather/dist/icons/clock';

import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Headerbar from "../Headerbar/Headerbar";

import api from "../../services/api";

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.listProjects();
  }

  async listProjects() {
    try {
      const response = await api.get("/projects");
      const { projects } = response.data;

      this.setState({ projects });
    } catch (error) {
      console.log(error.response);
    }
  }

  mountProjectsList() {
    return (
      this.state.projects.map(project =>
        <div className="card mb-3" key={project._id}>
          <div className="card-body">
            <h3 className="card-title">
              <Link to={`/project/${project._id}`} className="text-dark">{project.name}</Link>
            </h3>

            <p className="d-flex align-items-center">
              <Clock size={16} className="mr-2" />
              {moment(project.createdAt).fromNow()}
            </p>

            <p className="card-text">{project.description}</p>

            <div className="mb-2">
              {project.skills.map((skill, index) => <span key={index} className="badge badge-primary p-2 mr-2">{skill}</span>)}
            </div>

            <Link to={`/${project.user[0]._id}`} className="text-dark">{project.user[0].email}</Link>

          </div>
        </div>
      )
    );
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
                  <h2 className="page__title">Listando todos os projetos</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {this.mountProjectsList()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
