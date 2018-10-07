import React, { Component } from "react";
import "./Projects.css";

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
                  {
                    this.state.projects.map(project => {
                      return (
                        <div className="card mb-3" key={project._id}>
                          <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text">{project.description}</p>
                            <Link to={`/project/${project._id}`} className="btn btn-primary">Ver Projeto</Link>
                          </div>
                        </div>
                      );
                    })
                  }
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
