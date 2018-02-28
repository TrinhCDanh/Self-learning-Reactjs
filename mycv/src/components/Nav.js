import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
        <div className="pt-trigger-container">
          <div className="pt-show-trigger" style={{width: 50, height: 50, backgroundColor: 'tomato', zIndex: 100}} />
          <div className="pt-trigger-content">
            <div className="pt-trigger-header" style={{padding: 5, fontSize: 18}}><img src="images/TCD.png" width="100%" />
              <p className="text-center">Trinh Cong Danh</p>
            </div><a className="pt-trigger pmd-ripple-effect" href="#" data-animation={51} data-goto={1}><span className="pt-block-trigger"><i className="fa fa-home"> </i>
                <p>Home</p></span></a><a className="pt-trigger pmd-ripple-effect" href="#" data-animation={6} data-goto={2}><span className="pt-block-trigger"><i className="fa fa-user" />
                <p>About me</p></span></a><a className="pt-trigger" href="#" data-animation={7} data-goto={3}><span className="pt-block-trigger"><i className="fa fa-book" />
                <p>Resume</p></span></a><a className="pt-trigger" href="#" data-animation={7} data-goto={4}><span className="pt-block-trigger"><i className="fa fa-suitcase" />
                <p>Portfolio</p></span></a><a className="pt-trigger" href="#" data-animation={7} data-goto={5}><span className="pt-block-trigger"><i className="fa fa-envelope" />
                <p>Contact</p></span></a>
          </div>
        </div> 
    );
  }
}


