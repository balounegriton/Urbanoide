import React, { Component } from 'react';
import './App.css';
import loop from "./video/loop.mp4";
import favicon from "./video/urb_favicon_black.svg";
import logo from "./video/urb_logo_black.svg";
import { withGetScreen } from 'react-getscreen'


class App extends Component {
  constructor() {
    super();
    const me = this
    this.state = {
    };
    var scrollStop = function (callback) {

      // Make sure a valid callback was provided
      if (!callback || typeof callback !== 'function') return;

      // Setup scrolling variable
      var isScrolling;

      // Listen for scroll events
      window.addEventListener('scroll', function (event) {

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function () {

          // Run the callback
          callback();

        }, 666);

      }, false);

    };

    scrollStop(function () {
      me.pauseVideo()

    });
  }



  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.playVideo()
  }


  playVideo = () => {
    this.refs.vidRef.play();
    document.getElementById("video1").className = "mouseHover";


  };

  pauseVideo = () => {
    this.refs.vidRef.pause();
    document.getElementById("video1").className = "mouseNotHover";


  };





  render() {

    ////// Moblie version

    if (this.props.isMobile() || this.props.isTablet()) {
      return (


        <div>
          tablette iphone
        </div>
      )



    }



    ////// Desktop version
    else {

      return (
        <div>





          <div className="allo2">
            <img src={favicon} alt="" className="logo" />
          </div>

          <div className="allo2">
            Going Live 2022
          </div>

          <div className="allo2">
          <img src={logo} alt="" className="logo" />
          </div>



          <div className="colorBackground">
            <video
              id="video1"
              className="mouseNotHover"
              ref="vidRef"
              src={loop}
              type="video/mp4"
              loop
              muted
            />
          </div>











        </div>
      )

    }



  }
}

export default withGetScreen(App);

