import React from "react";
import './profile.css';
import IG from "../../../assets/img/instagram.svg";



const Profile = () => {

  return <React.Fragment>
    <div class="profile-card">
      <div class="card flex-row flex-wrap">
        <div class="img-avatar">

        </div>
        <div class="card-text">
          <div class="portada">

          </div>
          <div class="title-total">
            <div class="title">The Bride</div>
            <h2>Gustiani Hikmattun Nafisah</h2>

            <div class="desc">The Daughter of <br /> Mr. Eden Sukayat <br />&<br /> Mrs. Kiki Maskiah</div>
            <div class="actions">
            <div></div>
              <a href="https://www.instagram.com/gustianihikma/">
                <img src={IG} alt="" class="icon-button" style={{width:'30px'}}/></a>
                <div></div>
            </div></div>

        </div>

      </div>

      <div class="card">
        <div class="img-avatar2">

        </div>
        <div class="card-text">
          <div class="portada2">

          </div>
          <div class="title-total">
            <div class="title">The Groom</div>
            <h2>Deni Chandra Pamungkas</h2>

            <div class="desc">The Daughter of <br /> Mr. Udin Haryadin <br />&<br /> Mrs. Aisyah</div>
            <div class="actions">
              <div></div>
              <a href="https://www.instagram.com/denichandrap/"><img src={IG} alt="" class="icon-button" style={{width:'30px'}} /></a>
              <div></div>

            </div></div>

        </div>

      </div>

    </div>


  </React.Fragment>
}


export default Profile;