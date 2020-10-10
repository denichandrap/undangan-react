import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Splash from '../pages/splash/splash';
import App from '../App';
import history from './history';
import Main from '../pages/main/main';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Splash} />
          <Route path="/Main" component={Main} />
        </Switch>
      </Router>
    );
  }
}
