import React from "react";
import './profile.css';
import IG from "../../../assets/img/instagram.svg";



const Profile = () => {
  
    return <React.Fragment>
      <div class="profile-card">
        <div class="card">
  <div class="img-avatar">
  
  </div>
  <div class="card-text">
    <div class="portada">
    
    </div>
    <div class="title-total">   
      <div class="title">The Bride</div>
      <h2>Gustiani Hikmattun Nafisah</h2>
  
  <div class="desc">The Daughter of <br/><br/> Mr. Eden Sukayat <br/>&<br/> Mrs. Kiki Marsiah</div>
  <div class="actions">
  <button><img src="" alt="" class="icon-button"/></button>
  <button><img src={IG} alt="" class="icon-button"/></button>
    <button><img src="" alt="" class="icon-button"/></button>
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
      <h3>Deni Chandra Pamungkas</h3>
  
  <div class="desc">The Daughter of <br/><br/> Mr. Udin Haryadin <br/>&<br/> Mrs. Aisyah</div>
  <div class="actions">
  <button><img src="" alt="" class="icon-button"/></button>
  <button><img src={IG} alt="" class="icon-button"/></button>
    <button><img src="" alt="" class="icon-button"/></button>
 
  </div></div>
 
  </div>
  
 </div>
  
</div>
      

  </React.Fragment>
}


export default Profile;