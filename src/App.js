import React, { Component } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import RecentJobs from './components/RecentJobs/RecentJobs';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <RecentJobs></RecentJobs>
      </React.Fragment>
    );
  }
}

export default App;
