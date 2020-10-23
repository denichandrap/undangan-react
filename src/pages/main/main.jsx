import React from 'react';
import Header from './header/header';
import Countdown from './countdown/countdown';
import Greetings from './greetings/greetings';
import Profile from './profile/profile';
import Location from './location/location';
import Wishes from './wishes/wishes';

import './main.css';
import Timeline from './timeline/timeline';



function Main() {

    return <React.Fragment>
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

    </React.Fragment>
}

export default Main;