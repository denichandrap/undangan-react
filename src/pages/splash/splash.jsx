import React from 'react';
// import logo from '../../assets/img/logo.svg';
import { Button } from 'react-bootstrap';
import history from '../../components/history';
import './splash.css';

function Splash() {
  return (
    <div className="Splash">
      <header className="Splash-header">
        {/* <img src={logo} className="Splash-logo" alt="logo" /> */}
        <Button variant="btn btn-success" onClick={() => history.push('/Main')}>navigate to page</Button>
      </header>
      <Button variant="btn btn-success" onClick={() => history.push('/Main')}>navigate to page</Button>
    </div>
  );
}

export default Splash;
