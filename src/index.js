import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "popper.js";

import { isAuthenticated } from "./services/auth";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Settings from "./components/Settings/Settings";
import Projects from "./components/Projects/Projects";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import Profile from "./components/Profile/Profile";
import Error404 from "./Errors/Error404/Error404";

import registerServiceWorker from "./registerServiceWorker";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/auth/sign-in", state: { from: props.location } }} />
      )
    }
  />
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/auth/sign-in" component={Login} />
      <Route path="/auth/sign-up" component={Register} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/projects" component={Projects} />
      <PrivateRoute path="/settings" component={Settings} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/:id" component={Profile} />
      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
