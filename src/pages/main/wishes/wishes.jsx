import React from "react";
import camera from "../../../components/camera";
import './wishes.scss';
import axios from 'axios';

class Wishes extends React.Component {
  

  constructor() {
    super();
    this.state = {
        selectedFile: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);

}


handleInputChange(event) {
    this.setState({
        selectedFile: event.target.files[0],
    })

}


submit() {
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    console.warn(this.state.selectedFile);
    let url = "https://react-undagan.skypieateknik.co.id/upload.php";

    axios.post(url, data, {}).then(res => {
        console.warn(res);
    })
}
render() {
  return (
    <React.Fragment>
      <div class="wishes">
      {/* <form> */}
  <label>
    Name:
    <input type="text" name="name" />
  </label>

  <label>
    Message:
    <input type="text" name="message" />
  </label>
  <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
  <button type="submit" className="btn btn-dark" onClick={() => this.submit()}>Save</button>
{/* </form> */}
        
      </div>

      <div class="nuhun">
        Thanks </div>

        <div class='for-nama'>Gustiani & Deni</div>

     
    </React.Fragment>
  );
}};

export default Wishes;
