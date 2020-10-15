import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Splash from '../pages/splash/splash';
import App from '../App';
import history from './history';
import Main from '../pages/main/main';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled, { keyframes } from "styled-components";


const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #e3f2fd;
  font-family: "Open Sans", sans-serif;
`;

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
                    <Route exact path="/" component={Splash} />
                    <Route exact path="/Main" component={Main} />
                    <Route exact path="/App" component={App} />
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