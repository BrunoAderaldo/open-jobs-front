import React, { Component } from 'react';
import './RecentJobs.css';

import axios from 'axios';

import ProjectItem from '../ProjectItem/ProjectItem';

class RecentJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    this.getRecentProjects();
  }

  async getRecentProjects() {
    try {
      const response = await axios.get('http://localhost:9000/projects');
      let projects = response.data.projects;

      this.setState({ projects, isLoaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <section className="recent-jobs">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="recent-jobs__text">Recent Jobs</h2>
            </div>
          </div>
          <div className="row">
            {
              this.state.projects.map(project => <ProjectItem key={project._id} {...project} />)
            }
          </div>
        </div>
      </section>
    );
  }
}

export default RecentJobs;
