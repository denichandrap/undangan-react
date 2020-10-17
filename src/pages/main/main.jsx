import React from 'react';
import Header from './header/header';
import Isi from './isi/isi';
import Greetings from './greetings/greetings';
import Profile from './profile/profile';
import Location from './location/location';
import Wishes from './wishes/wishes';




function Main(){
    
    return <React.Fragment>
        <Header />
        <Greetings/>
        <Profile/>
        <Location/>
        <Isi/>
        <Wishes/>

  
    </React.Fragment>
}

export default Main;