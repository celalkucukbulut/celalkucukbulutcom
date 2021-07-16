import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/admin" component={Login} exact={true} />
        <PublicRoute path="/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;