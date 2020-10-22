import React from "react";
import "./wishes.scss";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";

class Wishes extends React.Component {
  constructor() {
    super();
    this.state = {
      // afterUpload: 'Klick Here to Upload',
      uploadPercentage: 0,
      selectedFile: "",
      name: "",
      msg: "",
      
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
  }
  // alert = useAlert();
 
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
    //   const data = {
    //     "file": this.state.selectedFile,
    //     "name": this.state.name,
    //     "msg": this.state.msg
    // }
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("msg", this.state.msg);
    data.append("file", this.state.selectedFile);


    console.log(data);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          this.setState({ uploadPercentage: percent });
        }
      },
    };

      let url = "https://react-undagan.skypieateknik.co.id/upload.php";
   // let url = "http://192.168.100.100/react/upload.php";
    // let url = "http://192.168.11.89/react/upload.php";
    //TODO: pengunaan option pada sebelumnya gagal upload

    axios.post(url, data, options).then((res) => {
      console.log(res);
      this.setState({ uploadPercentage: 100 }, () => {
        setTimeout(() => {
          this.setState({ uploadPercentage: 0 });
          window.location.reload();
        }, 1000);
 



      });
    });
    //  window.location.reload();
   

    // axios.post(url, data, {}).then(res => {
    //     console.warn(res);
    // })
  }
  
  render() {
    
    const { uploadPercentage } = this.state;
    return (
      <React.Fragment>
        <div class="wishes">
          {/* </form> */}
          <h1 className='timeline'>Send Wishes</h1>
          <div class="form-style-5">
            {/* <form> */}
            <fieldset>
              <legend>
                <span class="number">1</span> Write a message for us…
              </legend>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                onChange={this.handleNameChange}
              />
              <textarea
                name="msg"
                placeholder="Write a message for us"
                onChange={this.handleMsgChange}
              ></textarea>
            </fieldset>
            <fieldset>
              <legend>
                <span class="number">2</span> you can upload your wishes video
                or image
              </legend>
              <input
                type="file"
                name="upload_file"
                onChange={this.handleInputChange}
              />
            </fieldset>
            <fieldset>
              {uploadPercentage > 0 && (
                <ProgressBar
                  now={uploadPercentage}
                  label={`${uploadPercentage}%`}
                />
              )}
            </fieldset>

            <br />
            <input type="submit" value="Send" onClick={() => this.submit()} />
            {/* </form> */}
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Wishes;
