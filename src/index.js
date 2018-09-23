import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login/Login';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/sign-in" component={Login} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
