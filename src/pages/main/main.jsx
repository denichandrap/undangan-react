import React, { Component } from 'react';
import Header from './header/header';
import Countdown from './countdown/countdown';
import Greetings from './greetings/greetings';
import Profile from './profile/profile';
import Location from './location/location';
import Wishes from './wishes/wishes';

import './main.css';
import history from '../../components/history';
import styled, { keyframes } from "styled-components";
import '../splash/splash.scss';
import { Button } from 'react-bootstrap';


import '../splash/splash.scss';

const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

// const slideInRight = keyframes`
//   from {
//     transform: translate3d(100%, 0, 0);
//     visibility: visible;
//   }

//   to {
//     transform: translate3d(0, 0, 0);
//   }
// `;

// const slideOutRight = keyframes`
//   from {
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }

//   to {
//     visibility: hidden;
//     -webkit-transform: translate3d(100%, 0, 0);
//     transform: translate3d(100%, 0, 0);
//   }
// `;


const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
 
  text-align: center;
  
  a {
    text-decoration: none;
  
    padding: 10px 20px;
    border: 1px solid #4776e6;
    border-radius: 5px;
    background-image: linear-gradient(
      to right,
      #4776e6 0%,
      #8e54e9 51%,
      #4776e6 100%
    );
  }

`;

const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;

// const DetailsPageElm = styled(Page)`
//   background-color: #90caf9;
//   &.page-enter {
//     animation: ${slideInRight} 0.2s forwards;
//   }
//   &.page-exit {
//     animation: ${slideOutRight} 0.2s forwards;
//   }
// `;

class Main extends Component {
    constructor() {
        super();
        this.state = {
            first:true,
        };
    }
    
    
    
    render(){
    return<React.Fragment> { (this.state.first) ? 
    // <HomePageElm>
    <div className="Page">
        {/* <div className="Splash"> */}
          <header className="Splash-header">
            <div className="untuktext">
            <h2 className="for-p-2">You’re Invited!</h2>
            <p className="for-p-2">The Wedding Celebration of</p>
            <h1 className="for-h1-2">Ima & Deni</h1></div>
            {/* <img src={logo} className="Splash-logo" alt="logo" /> */}
            <Button variant="btn btn-success navigasi" onClick={() => 
            //    history.push('/Main')    
            this.setState({ first : false})      
              }>Open Invitation</Button>
          </header>
            {/* </div> */}
            </div>
         :





        
       <div class='page-enter'>
        <div class='main'>
            <Header />
            <Greetings />
            <Profile />
            <Location />
            <Countdown date={`2020-10-31T11:00:00`} />
            <Wishes />
            

            <div class="nuhun">Thanks </div>
            <div class="for-nama">Gustiani & Deni</div>
        </div>
        </div>
    }</React.Fragment>
      }
}

export default Main;