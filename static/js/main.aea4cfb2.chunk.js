(this["webpackJsonpundagan-react"]=this["webpackJsonpundagan-react"]||[]).push([[0],{103:function(e,a,t){e.exports=t(168)},109:function(e,a,t){},110:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){},166:function(e,a,t){},168:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(26),s=t.n(r),c=t(47);t(108),t(109),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(20),o=t(21),m=t(23),u=t(22),d=t(12),h=t(33),g=t(172),p=t(15),E=Object(p.a)(),f=t(34);t(110);function v(){var e=Object(h.a)(["\n  &.page-enter {\n    animation: "," 0.2s forwards;\n  }\n  &.page-exit {\n    animation: "," 0.2s forwards;\n  }\n"]);return v=function(){return e},e}function b(){var e=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n \n  text-align: center;\n  \n  a {\n    text-decoration: none;\n  \n    padding: 10px 20px;\n    border: 1px solid #4776e6;\n    border-radius: 5px;\n    background-image: linear-gradient(\n      to right,\n      #4776e6 0%,\n      #8e54e9 51%,\n      #4776e6 100%\n    );\n  }\n\n"]);return b=function(){return e},e}function y(){var e=Object(h.a)(["\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(h.a)(["\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n"]);return w=function(){return e},e}var k=Object(f.b)(w()),x=Object(f.b)(y()),C=f.a.div(b()),O=Object(f.a)(C)(v(),k,x);var N=function(){return l.a.createElement(O,null,l.a.createElement("header",{className:"Splash-header"},l.a.createElement("div",{className:"untuktext"},l.a.createElement("h2",{className:"for-p-2"},"You\u2019re Invited!"),l.a.createElement("p",{className:"for-p-2"},"The Wedding Celebration of"),l.a.createElement("h1",{className:"for-h1-2"},"Ima & Deni")),l.a.createElement(g.a,{variant:"btn btn-success navigasi",onClick:function(){return E.push("/Main")}},"Open Invitation")))};t(112);var j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"header"},l.a.createElement("div",{class:"inner-header flex"},l.a.createElement("div",{class:"for-p"},"We Are Getting Married",l.a.createElement("div",{class:"for-h1"},"Gustiani & Deni"),"31 October 2020")),l.a.createElement("div",null,l.a.createElement("svg",{class:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"},l.a.createElement("defs",null,l.a.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),l.a.createElement("g",{class:"parallax"},l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(103, 156, 136,0.7"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(131, 178, 162,0.5)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(82, 134, 112,0.3)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"rgb(82, 134, 112)"}))))))},S=(t(113),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={days:0,hours:0,min:0,sec:0},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var a=e.calculateCountdown(e.props.date);a?e.setState(a):e.stop()}),1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"calculateCountdown",value:function(e){var a=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(a<=0)return!1;var t={years:0,days:0,hours:0,min:0,sec:0};return a>=31557600&&(t.years=Math.floor(a/31557600),a-=365.25*t.years*86400),a>=86400&&(t.days=Math.floor(a/86400),a-=86400*t.days),a>=3600&&(t.hours=Math.floor(a/3600),a-=3600*t.hours),a>=60&&(t.min=Math.floor(a/60),a-=60*t.min),t.sec=a,t}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"addLeadingZeros",value:function(e){for(e=String(e);e.length<2;)e="0"+e;return e}},{key:"render",value:function(){var e=this.state;return l.a.createElement("div",{className:"Countdown"},l.a.createElement("h2",{class:"count-title"},"Counting down to the big day"),l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.days)),l.a.createElement("span",null,1===e.days?"Day":"Days"))),l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.hours)),l.a.createElement("span",null,"Hours"))),l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.min)),l.a.createElement("span",null,"Minutes"))),l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.sec)),l.a.createElement("span",null,"Seconds"))))}}]),t}(n.Component));S.defaultProps={date:new Date};var M=S,D=(t(114),t(97)),I=t.n(D),T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"greeting-continer"},l.a.createElement("img",{src:I.a,alt:"",class:"img-Rose"}),l.a.createElement("br",null),l.a.createElement("div",{class:"text-greet"},"\u201cAnd of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.\u201d",l.a.createElement("br",null),l.a.createElement("br",null),"(Ar-Rum: 21)"),"     "))},F=(t(115),t(48)),H=t.n(F),P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"profile-card"},l.a.createElement("div",{class:"card flex-row flex-wrap"},l.a.createElement("div",{class:"img-avatar"}),l.a.createElement("div",{class:"card-text"},l.a.createElement("div",{class:"portada"}),l.a.createElement("div",{class:"title-total"},l.a.createElement("div",{class:"title"},"The Bride"),l.a.createElement("h2",null,"Gustiani Hikmattun Nafisah"),l.a.createElement("div",{class:"desc"},"The Daughter of ",l.a.createElement("br",null)," Mr. Eden Sukayat ",l.a.createElement("br",null),"&",l.a.createElement("br",null)," Mrs. Kiki Maskiah"),l.a.createElement("div",{class:"actions"},l.a.createElement("div",null),l.a.createElement("a",{href:"https://www.instagram.com/gustianihikma/"},l.a.createElement("img",{src:H.a,alt:"",class:"icon-button",style:{width:"30px"}})),l.a.createElement("div",null))))),l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"img-avatar2"}),l.a.createElement("div",{class:"card-text"},l.a.createElement("div",{class:"portada2"}),l.a.createElement("div",{class:"title-total"},l.a.createElement("div",{class:"title"},"The Groom"),l.a.createElement("h2",null,"Deni Chandra Pamungkas"),l.a.createElement("div",{class:"desc"},"The Daughter of ",l.a.createElement("br",null)," Mr. Udin Haryadin ",l.a.createElement("br",null),"&",l.a.createElement("br",null)," Mrs. Aisyah"),l.a.createElement("div",{class:"actions"},l.a.createElement("div",null),l.a.createElement("a",{href:"https://www.instagram.com/denichandrap/"},l.a.createElement("img",{src:H.a,alt:"",class:"icon-button",style:{width:"30px"}})),l.a.createElement("div",null)))))))},R=(t(116),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"lokasi"},l.a.createElement("div",{id:"login-container"},l.a.createElement("div",{class:"profile-img"}),l.a.createElement("h1",null,"Save The Date"),l.a.createElement("div",{class:"description"},"Saturday, October 31, 2020",l.a.createElement("br",null),"11.00 - 15.00",l.a.createElement("br",null),"Balai Gedung Atikah",l.a.createElement("br",null),"Jl. Cilisung No 237 Rt. 02 Rw. 14 Desa Sukamenak Kecamatan Margahayu Kabupaten Bandung.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h8",null,"*Please Wear Your Mask.")),l.a.createElement("a",{href:"https://goo.gl/maps/sAMYB7y72YLUX5pN6"},l.a.createElement("button",null,"View Location")))))}),W=t(28),Y=t(25),A=(t(117),t(173)),B=t(24),L=(t(55),t(56),t(39)),G=t(32),Z=t.n(G),U=t(38),V=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).handleData=function(){e.observer=new IntersectionObserver(e.handleObserver.bind(Object(Y.a)(e)),{root:null,rootMargin:"0px",threshold:1}),e.observer.observe(e.loadingRef),e.setState({media:[],loading:!1,page:0,prevY:0,length:0})},e.state={uploadPercentage:0,selectedFile:"",name:"",msg:"",media:[],loading:!1,page:0,prevY:0,length:0,reload:!1,done:""},e.handleInputChange=e.handleInputChange.bind(Object(Y.a)(e)),e.handleNameChange=e.handleNameChange.bind(Object(Y.a)(e)),e.handleMsgChange=e.handleMsgChange.bind(Object(Y.a)(e)),e}return Object(o.a)(t,[{key:"handleInputChange",value:function(e){this.setState({selectedFile:e.target.files[0]})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleMsgChange",value:function(e){this.setState({msg:e.target.value})}},{key:"componentDidMount",value:function(){this.handleData()}},{key:"handleObserver",value:function(e,a){var t=e[0].boundingClientRect.y;this.state.prevY>t&&(0===this.state.page&&this.setState({length:this.state.media.length}),this.setState({page:this.state.page+this.state.length}),this.getData(this.state.page)),this.setState({prevY:t})}},{key:"getData",value:function(e){var a=this;this.setState({loading:!0});var t="https://react-undagan.skypieateknik.co.id/getdata.php?page="+e;Z.a.get(t).then((function(e){a.setState({media:[].concat(Object(W.a)(a.state.media),Object(W.a)(e.data))}),a.setState({loading:!1})}))}},{key:"submit",value:function(){var e=this,a=new FormData;a.append("name",this.state.name),a.append("msg",this.state.msg),a.append("file",this.state.selectedFile);var t={onUploadProgress:function(a){var t=a.loaded,n=a.total,l=Math.floor(100*t/n);console.log("".concat(t,"kb of ").concat(n,"kb | ").concat(l,"%")),l<100&&e.setState({uploadPercentage:l})}};Z.a.post("https://react-undagan.skypieateknik.co.id/upload.php",a,t).then((function(a){console.log(a),e.setState({uploadPercentage:100},(function(){setTimeout((function(){e.setState({uploadPercentage:0,selectedFile:"",name:"",msg:"",done:"Thank You for your wishes"}),document.getElementById("upload").value="",e.handleData()}),1e3)}))}))}},{key:"render",value:function(){var e=this,a={display:this.state.loading?"block":"none"},t=this.state.uploadPercentage;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"wishes"},l.a.createElement("h1",{className:"timeline"},"Send Wishes"),l.a.createElement("div",{class:"form-style-5"},l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("span",{class:"number"},"1")," Write a message for us\u2026"),l.a.createElement("input",{type:"text",name:"name",placeholder:"Your Name *",onChange:this.handleNameChange,value:this.state.name}),l.a.createElement("textarea",{name:"msg",placeholder:"Write a message for us",onChange:this.handleMsgChange,value:this.state.msg})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("span",{class:"number"},"2")," you can upload your wishes video or image"),l.a.createElement("input",{type:"file",name:"upload_file",onChange:this.handleInputChange,id:"upload"})),l.a.createElement("fieldset",null,t>0&&l.a.createElement(A.a,{now:t,label:"".concat(t,"%")})),this.state.done,l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Send",onClick:function(){return e.submit()}}))),l.a.createElement("br",null),l.a.createElement("h1",{className:"timeline"},"Timeline Wishes"),l.a.createElement(B.VerticalTimeline,null,this.state.media.map((function(e){return l.a.createElement(B.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"rgb(33, 150, 243)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},date:e.date,iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"}},l.a.createElement("h3",{className:"vertical-timeline-element-title timeline-judul"},e.name),l.a.createElement("br",null),"mp4"===e.ext?l.a.createElement(U.Player,{playsInline:!0,poster:e.upload,src:e.upload}):l.a.createElement(L.a,{small:e.upload,large:e.upload}),l.a.createElement("p",{className:"pesan"},e.msg))})),l.a.createElement("div",{ref:function(a){return e.loadingRef=a},style:{height:"100px",margin:"30px"}},l.a.createElement("span",{style:a},"Loading...")),l.a.createElement(B.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},textClassName:!0===this.loadingRef?"loading":""})),l.a.createElement("br",null))}}]),t}(n.Component);t(166),n.Component;var J=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"main"},l.a.createElement(j,null),l.a.createElement(T,null),l.a.createElement(P,null),l.a.createElement(R,null),l.a.createElement(M,{date:"2020-10-31T11:00:00"}),l.a.createElement(V,null),l.a.createElement("div",{class:"nuhun"},"Thanks "),l.a.createElement("div",{class:"for-nama"},"Gustiani & Deni")))},K=t(170),X=t(171),q=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.b,{history:E},l.a.createElement(d.a,{render:function(e){var a=e.location;return l.a.createElement(K.a,{component:null},l.a.createElement(X.a,{timeout:300,classNames:"page",key:a.key},l.a.createElement(d.c,{location:a},l.a.createElement(d.a,{exact:!0,path:"/",component:N}),l.a.createElement(d.a,{exact:!0,path:"/Main",component:J}))))}}))}}]),t}(n.Component);s.a.render(l.a.createElement(c.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){e.exports=t.p+"static/media/instagram.b1c58ee1.svg"},56:function(e,a,t){},97:function(e,a,t){e.exports=t.p+"static/media/rose.e0971e34.png"}},[[103,1,2]]]);
//# sourceMappingURL=main.aea4cfb2.chunk.js.map