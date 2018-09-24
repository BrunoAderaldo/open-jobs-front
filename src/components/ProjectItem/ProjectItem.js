import React, { Component } from 'react';
import './ProjectItem.css';

import { Link } from 'react-router-dom';

class ProjectItem extends Component {
  render() {
    const { _id, name, description, skills } = this.props;
    return (
      <div className="col-12 col-md-6">
        <div className="card project-item">
          <div className="card-body">
            <div className="project-item__content">
              <h3 className="project-item__name">{name}</h3>
              <h5 className="project-item__description">{description}</h5>
            </div>
            <Link to={`/projects/${_id}`} className="btn btn-block btn-secondary">Ver Job</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
