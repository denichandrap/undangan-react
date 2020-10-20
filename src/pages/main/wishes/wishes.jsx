import React from "react";
import "./wishes.scss";
import axios from "axios";
import { ProgressBar } from 'react-bootstrap';

class Wishes extends React.Component {
  constructor() {
    super();
    this.state = {
      afterUpload: 'Klick Here to Upload',
      uploadPercentage: 0,
      selectedFile: "",
      name: "",
      msg: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
    });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleMsgChange(event) {
    this.setState({ msg: event.target.value });
  }

  submit() {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    data.append("nama", this.state.name);
    data.append("msg", this.state.msg);
    // console.warn(this.state.selectedFile);
    // console.log(this.state.name);
    // console.log(this.state.msg);


    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total)
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          this.setState({ uploadPercentage: percent })

        }
      }
    }

    let url = "https://react-undagan.skypieateknik.co.id/upload.php";
    // let url = "http://192.168.100.100/react/upload.php";

    axios.post(url, data, options).then(res => {
      console.log(res)
      this.setState({ uploadPercentage: 100, afterUpload: 'Upload Berhasil Terima kasih' }, () => {
        setTimeout(() => {
          this.setState({ uploadPercentage: 0 })
        }, 1000);
      })
    })



    // axios.post(url, data, {}).then(res => {
    //     console.warn(res);
    // })
  }
  render() {
    const { uploadPercentage } = this.state;
    return (
      <React.Fragment>
        <div class="wishes">
          {/* <form> */}
          {/* <label>
            Name:
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={this.handleNameChange}
            />
          </label>

          <label>
            Message:
            <input
              type="text"
              name="msg"
              className="form-control"
              onChange={this.handleMsgChange}
            />
          </label>
          <input
            type="file"
            className="form-control"
            name="upload_file"
            onChange={this.handleInputChange}
          />

          <p>{this.afterUpload}</p>
          {uploadPercentage > 0 && <ProgressBar now={uploadPercentage} label={`${uploadPercentage}%`} />}
          <button
            type="submit"
            className="btn btn-dark"
            onClick={() => this.submit()}
          >
            Submit
          </button> */}
          {/* </form> */}

          <div class="form-style-5">
            <form>
              <fieldset>
                <h1>Send Wishes</h1>
                <legend><span class="number">1</span> Write a message for us…</legend>
                <input type="text" name="name" placeholder="Your Name *" onChange={this.handleNameChange} />
                <textarea name="msg" placeholder="Write a message for us" onChange={this.handleMsgChange}></textarea>


              </fieldset>
              <fieldset>
                <legend><span class="number">2</span> you can upload your wishes video or image</legend>
                <input type="file" name="upload_file" onChange={this.handleInputChange} />
              </fieldset>
              {uploadPercentage > 0 && <ProgressBar now={uploadPercentage} label={`${uploadPercentage}%`} />}
              <br />
              <input type="submit" value="Apply" />
            </form>
          </div>
        </div>

        <div class="nuhun">Thanks </div>

        <div class="for-nama">Gustiani & Deni</div>



      </React.Fragment>
    );
  }
}

export default Wishes;
