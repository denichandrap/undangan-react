import React from 'react';
import logo from '../../assets/img/logo.svg';
import { Button } from 'react-bootstrap';
import history from '../../components/history';
import './splash.css';

function Splash() {
  return (
    <div className="Splash">
      <header className="Splash-header">
        <img src={logo} className="Splash-logo" alt="logo" />
        
      </header>
      <Button variant="btn btn-success" onClick={() => history.push('/App')}>navigate to page</Button>
    </div>
  );
}

export default Splash;
