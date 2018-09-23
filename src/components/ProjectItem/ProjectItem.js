import React, { Component } from 'react';
import './ProjectItem.css';

class ProjectItem extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="card project-item">
          <div className="card-body">
            <div className="project-item__content">
              <h3 className="project-item__name">{this.props.name}</h3>
              <h5 className="project-item__description">{this.props.description}</h5>
            </div>
            <button type="button" className="btn btn-block btn-secondary">Ver Job</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
