import React, { Component } from 'react';
import './App.css';
import loop from "./video/loop.mp4";
import img from "./video/img.jpg";
import Anim1 from "./Animation/Amin1.js";
import Anim2 from "./Animation/Amin2.js";
import { withGetScreen } from 'react-getscreen'
import VisibilitySensor from "react-visibility-sensor";


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
    setTimeout(function(){ document.body.style.overflow = "scroll" }, 3000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.playVideo()
  }


  playVideo = () => {
    
    if (this.props.isMobile() || this.props.isTablet()) {
      document.getElementById("img1").className = "mouseHover2";
    }

    else{
      this.refs.vidRef.play();
      document.getElementById("video1").className = "mouseHover";
    }



  };

  pauseVideo = () => {

    if (this.props.isMobile() || this.props.isTablet()) {
      document.getElementById("img1").className = "mouseNotHover";
    }

    else{
    this.refs.vidRef.pause();
    document.getElementById("video1").className = "mouseNotHover";
    }

  };

  onChange = (isVisible) => {

    this.setState({
      visable: isVisible
    })
  }

  onChange2 = (isVisible) => {
   
    this.setState({
      visable2: isVisible
    })
  }





  render() {

    ////// Moblie version

    if (this.props.isMobile() || this.props.isTablet()) {
      return (


        <div>
        <div className="allo2">        
              <  Anim1  />  
        </div>

        <div className="allo2">
        <VisibilitySensor onChange={this.onChange2}>
            <div className="emptydiv2">
              {this.state.visable2 && <div className="anim2" >     
                
              <  Anim2  />  </div>}
            </div>

          </VisibilitySensor>
        </div>


        <div className="colorBackground">
          <img
           id="img1"
           className="mouseNotHover"
           src={img}
            alt=""
            />
  
           
         
         
      
        </div>











      </div>
      )



    }



    ////// Desktop version
    else {

      return (
        <div>
          <div className="allo2">        
                <  Anim1  />  
          </div>

          <div className="allo2">
          <VisibilitySensor onChange={this.onChange2}>
              <div className="emptydiv2">
                {this.state.visable2 && <div className="anim2" >     
                  
                <  Anim2  />  </div>}
              </div>

            </VisibilitySensor>
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

