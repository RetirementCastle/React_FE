import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/DashboardPage';
import Expediture from './containers/transactions/Expediture';
import Entry from './containers/transactions/Entry';
import Info from './containers/deploy/Info';
import EmployeeInfo from './containers/deploy/EmployeeInfo';
import NHInfo from './containers/deploy/NHInfo';
import Showallr from './containers/deploy/Showallr';
import Showalle from './containers/deploy/Showalle';
import ShowallNH from './containers/deploy/ShowallNH';
import ShowallTrans from './containers/deploy/ShowallTrans';
import Newresident from './containers/deploy/Newresident';
import Neweployee from './containers/deploy/Neweployee';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="new_res" component={Newresident}/>
      <Route path="new_emp" component={Neweployee}/>
      <Route path="emp_info" component={EmployeeInfo}/>
      <Route path="residents" component={Showallr}/>
      <Route path="employees" component={Showalle}/>
      <Route path="homes" component={ShowallNH}/>
      <Route path="transactions" component={ShowallTrans}/>
      <Route path="NH" component={NHInfo}/>
      <Route path="info" component={Info}/>
      <Route path="home" component={Dashboard}/>
      <Route path="expediture" component={Expediture}/>
      <Route path="entry" component={Entry}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
