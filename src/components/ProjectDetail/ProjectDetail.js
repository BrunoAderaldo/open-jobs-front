import React, { Component } from "react";
import "./ProjectDetail.css";
import Edit2 from 'react-feather/dist/icons/edit-2';

import Sidebar from "../Sidebar/Sidebar";
import Headerbar from "../Headerbar/Headerbar";

import api from "../../services/api";

class ProjectDetail extends Component {
  constructor() {
    super();

    this.state = {
      _id: "",
      name: "",
      description: "",
      skills: [],
      user: [],
      createdAt: ""
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id

    this.getProject(id);
  }

  async getProject(id) {
    try {
      const response = await api.get(`/projects/${id}`);
      const project = response.data[0];

      console.log(project);

      this.setState({...project});
    } catch (error) {
      console.log(error.response);
    }
  }

  isProjectOwner() {
    if (this.state) {

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
                  <h2 className="page__title">Detalhes do projeto</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card mb-2" key={this.state._id}>
                    <div className="card-header bg-light d-flex align-items-center">
                      <Edit2 className="mr-2" />
                      <h3 className="m-0">{this.state.name}</h3>
                    </div>
                    <div className="card-body">
                      <p className="">{this.state.description}</p>
                      {
                        this.state.skills.map((skill, index) => <span key={index} className="p-2 badge badge-light mr-1">{skill}</span>)
                      }
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

export default ProjectDetail;
