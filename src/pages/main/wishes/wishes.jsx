import React, { Component } from "react";
import "./wishes.scss";
import { ProgressBar } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../timeline/timeline.scss";
import ModalImage from "react-modal-image";
import axios from "axios";
import { Player } from "video-react";

class Wishes extends Component {
  constructor() {
    super();
    this.state = {
      // afterUpload: 'Klick Here to Upload',
      uploadPercentage: 0,
      selectedFile: "",
      name: "",
      msg: "",
      media: [],
      loading: false,
      page: 0,
      prevY: 0,
      length: 0,
      reload: false,
      done:"",

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

  componentDidMount() {
    this.handleData();
  }


  handleData = () => {
    // this.getData(this.state.page);
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);

    // first
    this.setState({
      media: [],
      loading: false,
      page: 0,
      prevY: 0,
      length: 0,
    });
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    //  console.log(y);

    if (this.state.prevY > y) {
      if (this.state.page === 0) {
        this.setState({ length: this.state.media.length });
      }
      this.setState({ page: this.state.page + this.state.length });
      // this.setState({ prevY: this.state.media.length });

      //    console.log(this.state.media.length);
      //   console.log(this.state.page);
      //   console.log(this.state.length);
      this.getData(this.state.page);
    }
    this.setState({ prevY: y });
  }

  getData(page) {
    this.setState({ loading: true });
    let url = "https://api.invitation-gd.info/getdata.php?page=" + page;
    // let url = "https://react-undagan.skypieateknik.co.id/getdata.php?page=" + page;
    // let url = "http://192.168.100.100/react/getData.php?page=" + page;
    // let url = "http://192.168.11.89/react/getdata.php?page=";
    axios.get(url).then((res) => {
      // console.log(res);
      this.setState({ media: [...this.state.media, ...res.data] });
      this.setState({ loading: false });
    });
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

    let url ='https://api.invitation-gd.info/upload.php';  
   // let url = "https://react-undagan.invitation-gd.info/upload.php";
    // let url = "http://192.168.100.100/react/upload.php";
    // let url = "http://192.168.11.89/react/upload.php";
    //TODO: pengunaan option pada sebelumnya gagal upload

    axios.post(url, data, options).then((res) => {
      console.log(res);
      this.setState({ uploadPercentage: 100 }, () => {
        setTimeout(() => {
          this.setState({
            uploadPercentage: 0,
            selectedFile: "",
            name: "",
            msg: "",
            done:"Thank You for your wishes",
          });
          document.getElementById("upload").value = "";

          this.handleData();



          // <Timeline reload="true"/>
        }, 1000);
      });
    });
  }

  render() {
    const loadingCSS = {
      height: "100px",
      margin: "30px",
    };
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

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
                value={this.state.name}
              />
              <textarea
                name="msg"
                placeholder="Write a message for us"
                onChange={this.handleMsgChange}
                value={this.state.msg}
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
                id="upload"
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

{this.state.done}
            <br />
            <input type="submit" value="Send" onClick={() => this.submit()} />
            {/* </form> */}
          </div>
        </div>
        {/* this is time line */}

        <br />
        <h1 className="timeline">Timeline Wishes</h1>
        <VerticalTimeline>
          {this.state.media.map((result) => (

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={result.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title timeline-judul">{result.name}</h3>
              <br />
              { //result.upload.toString().endsWith("mp4")
                result.ext === "mp4"
                  ? (
                    <Player
                      playsInline
                      poster={result.upload}
                      src={result.upload}
                    />
                  ) :
                  (
                    <ModalImage
                      small={result.upload}
                      large={result.upload}
                    // alt=`From ${result.name} message : ${result.msg}`
                    />
                  )
              }
              <p className="pesan">{result.msg}</p>
            </VerticalTimelineElement>
          ))}
          <div
            ref={(loadingRef) => (this.loadingRef = loadingRef)}
            style={loadingCSS}
          >
            <span style={loadingTextCSS}>Loading...</span>
          </div>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            textClassName={(this.loadingRef === true) ? "loading" : ""}


          //  icon={<StarIcon />}
          />
        </VerticalTimeline>

        <br />

      </React.Fragment>
    );
  }
}

export default Wishes;
