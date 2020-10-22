import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Splash from "../pages/splash/splash";
import history from "./history";
import Main from "../pages/main/main";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route
          render={({ location }) => {
            return (
              // <PageContainer>
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/undangan-react/" component={Splash} />
                    <Route exact path="/undangan-react/Main" component={Main} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              // </PageContainer>
            );
          }}
        />
      </Router>

      //   <Router history={history}>
      //     <Switch>
      //       <Route path="/" exact component={Splash} />
      //       <Route path="/Main" component={Main} />
      //       <Route path="/App" component={App} />
      //     </Switch>
      //   </Router>
    );
  }
}
