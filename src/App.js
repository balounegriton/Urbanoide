import React, { Component } from 'react';
import './App.css';
import loop from "./video/loop.mp4";
import Anim1 from "./Animation/Amin1.js";
import { ReactComponent as Connecting } from './connecting.svg';
import { ReactComponent as Email } from './email.svg';
import { withGetScreen } from 'react-getscreen'



class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  playVideo = () => {
    if (this.props.isMobile() || this.props.isTablet()) {
      //  pourmobile a faire
    }

    else {
      document.getElementById("video1").className = "mouseHover";
    }
  };


  mouseStop = () => {
    document.getElementById("video1").className = "mouseNotHoverTop"
    document.getElementById("logo").className = "logoView";
    this.setState({ swap: !this.state.swap })

  }



  mouseMove = () => {
    document.getElementById("video1").className = "mouseHover";
    document.getElementById("logo").className = "logoHide";
    this.setState({ visable: true })

    clearTimeout(this.myTimeOut);

    this.myTimeOut = setTimeout(this.mouseStop, 100);

  }





  render() {

    ////// Moblie version

    if (this.props.isMobile() || this.props.isTablet()) {
      return (
        <div id="theBody">
          mobile tablet
        </div>
      )

    }


        ////// destop version
    else {





      return (
        <div id="theBody" onMouseMove={this.mouseMove}>




          {this.state.visable && <div className="fixeDiv">
            <div className="anim2" onClick={this.mail} >

              {!this.state.swap && <  Connecting />}
              {this.state.swap && <  Email />}
            </div>

          </div>}





          <div id="logo" className="logoView" >
            <div className="anim1"><  Anim1 />
            </div>

          </div>

          <div className="colorBackground">
            <video
              id="video1"
              className="mouseNotHoverTop"
              ref="vidRef"
              src={loop}
              type="video/mp4"
              loop
              muted
              autoPlay
            />
          </div>

        </div>
      )

    }
  }
}

export default withGetScreen(App);

