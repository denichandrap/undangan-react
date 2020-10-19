import React from "react";
import "./location.scss";

import { Button, Card } from "react-bootstrap";

const Location = () => {

  return (
    <React.Fragment>
      <div class="lokasi">
        <div id="login-container">
          <div class="profile-img"></div>
      
          <h1>Save The Date</h1>
          <div class="description">
            Saturday, 31 October 2020
            <br/>
            11.00 - 15.00 
            <br/>
            Balai Gedung Atikah
            <br/>
            Jl. Cilisung No 237 Rt. 02 Rw. 14 Desa Sukamenak
            Kecamatan Margahayu Kabupaten Bandung.
            <br/>
            <br/>
   <h8>*Please Wear Your Mask.</h8>
          </div>
        
          <a href='https://goo.gl/maps/sAMYB7y72YLUX5pN6' >
          <button >View Location</button></a>
          
        </div>
      </div>
      {/* <Card >
  
  <Card.Body>
  <Card.Img variant="top" src={Lok} />
    <Card.Title>Save The Date</Card.Title>
    <Card.Text>
      <center>Wedding Ceremony</center>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
    </React.Fragment>
  );
};
export default Location;
