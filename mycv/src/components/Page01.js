import React, { Component } from 'react';
// import myImage from '../images/TCD.png';

export default class Page01 extends Component {
  render() {
    return (
        <div className="pt-page pt-page-1">
          <video autoPlay muted loop id="myVideo">
            <source src="videos/background.MP4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="intro-name">
            {/* <div className="avatar" style={{width: '100%', textAlign: 'center'}}>
              <img alt="logo" src="images/TCD.png" width="150px" style={{borderRadius: '50%'}} />
            </div> */}
            <h1 style={{alignSelf: 'center', width: '100%'}}>
              Trinh Cong Danh
            </h1>
            <div id="app" style={{fontSize: 30, alignSelf: 'center', color: 'black'}} />
            
            <button type="button" class="btn btn-success pmd-ripple-effect" data-animation={6} data-goto={2} >button</button>
            
          </div>
        </div>
    );
  }
}

