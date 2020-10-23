import React, { Component } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss";
import ModalImage from "react-modal-image";
import axios from "axios";
import { Player } from "video-react";

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media: [],
            loading: false,
            page: 0,
            prevY: 0,
            length: 0,
            reload:false,
        };
    }
    componentWillUnmount() {
        //  console.log('unmount');
    }
    componentDidMount() {
        this.handleData();
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        // if (this.props.reload !== prevProps.reload) {
            console.log('ada perubahan');
            if(this.state.media.length!==prevProps.media.length){
                console.log('ada 123');
            this.handleData();
        }
      }

    handleData ()  {
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
        // console.log(this.loadingRef);
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
        let url =
            "https://react-undagan.skypieateknik.co.id/getdata.php?page=" + page;
        // let url = "http://192.168.100.100/react/getData.php?page=" + page;
        // let url = "http://192.168.11.89/react/getdata.php?page=";
        axios.get(url).then((res) => {
            // console.log(res);
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



export default Timeline;
