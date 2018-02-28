import React, { Component } from 'react';

export default class Page06 extends Component {
  render() {
    return (
        <div className="pt-page pt-page-1">
          <div className="name">
            <div className="avatar" style={{width: '100%', textAlign: 'center'}}><img src="image/TCD.png" width="150px" style={{borderRadius: '50%'}} /></div>
            <h1 style={{alignSelf: 'center', width: '100%', textAlign: 'center'}}>Trinh Cong Danh</h1>
            <div id="app" style={{fontSize: 30, alignSelf: 'center', color: 'black'}} />
          </div>
        </div> 
    );
  }
}


