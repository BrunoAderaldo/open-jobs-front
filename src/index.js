import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

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

moment.locale('pt-br', {
  months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
  monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
  weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
  weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
  weekdaysMin: 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY [às] LT',
    LLLL: 'dddd, D [de] MMMM [de] YYYY [às] LT'
  },
  calendar: {
    sameDay: '[Hoje às] LT',
    nextDay: '[Amanhã às] LT',
    nextWeek: 'dddd [às] LT',
    lastDay: '[Ontem às] LT',
    lastWeek: function () {
      return (this.day() === 0 || this.day() === 6) ?
        '[Último] dddd [às] LT' : // Saturday + Sunday
        '[Última] dddd [às] LT'; // Monday - Friday
    },
    sameElse: 'L'
  },
  relativeTime: {
    future: 'em %s',
    past: 'há %s',
    s: 'segundos',
    m: 'um minuto',
    mm: '%d minutos',
    h: 'uma hora',
    hh: '%d horas',
    d: 'um dia',
    dd: '%d dias',
    M: 'um mês',
    MM: '%d meses',
    y: 'um ano',
    yy: '%d anos'
  },
  ordinal: '%dº'
});

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
