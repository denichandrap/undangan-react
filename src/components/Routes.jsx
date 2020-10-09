import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Splash from "../pages/splash/splash";
import App from "../App";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Splash} />
                    <Route path="/App" component={App} />
                </Switch>
            </Router>
        )
    }
}