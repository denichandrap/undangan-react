import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss";
import ModalImage from "react-modal-image";
import Video2 from "../../../assets/video/file.mp4";
import axios from "axios";
import { Player } from "video-react";

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      media: [],
      loading: false,
      page: 0,
      prevY: 0,
      length: 0,
    };
  }
  componentDidMount() {
    this.getData(this.state.page);

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
  }

  handleObserver(entities, observer) {
    if (this.state.page == 0) {
      this.setState({ length: this.state.media.length });
    }

    this.setState({ page: this.state.page + this.state.length });
    this.setState({ prevY: this.state.media.length });

    //    console.log(this.state.media.length);
    //   console.log(this.state.page);
    //   console.log(this.state.length);
    this.getData(this.state.page);
  }

  getData(page) {
    this.setState({ loading: true });
    let url =
      "https://react-undagan.skypieateknik.co.id/getdata.php?page=" + page;
    // let url = "http://192.168.100.100/react/getData.php?page=" + page;
    // let url = "http://192.168.11.89/react/getdata.php?page=";
    axios.get(url).then((res) => {
      console.log(res);
      this.setState({ media: [...this.state.media, ...res.data] });
      this.setState({ loading: false });
    });
  }

  render() {
    const loadingCSS = {
      height: "100px",
      margin: "30px",
    };
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
    return (
      <React.Fragment>
        <br />
        <h1>Timeline</h1>
        <VerticalTimeline>
          {this.state.media.map((result) => (
            // <img src={user.filename} height="100px" width="200px" />

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
              <h3 className="vertical-timeline-element-title">{result.name}</h3>
              <br />
              {result.ext != "mp4" ? (
                <ModalImage
                  small={result.upload}
                  large={result.upload}
                  // alt=`From ${result.name} message : ${result.msg}`
                />
              ) : (
                <Player
                  playsInline
                  poster={result.upload}
                  src={result.upload}
                />
              )}
              <p>{result.msg}</p>
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
            //  icon={<StarIcon />}
          />
        </VerticalTimeline>

        {/* <Scroll/> */}
      </React.Fragment>
    );
  }
}

export default Timeline;
