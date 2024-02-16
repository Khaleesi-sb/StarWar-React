import React from 'react';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Login from './pages/login';
import SearchStars from './pages/searchStars';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withRouter(Login)} />
        <Route exact path="/searchStars" component={withRouter(SearchStars)} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
