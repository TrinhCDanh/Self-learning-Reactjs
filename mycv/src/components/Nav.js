import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNav: false
    }
  }

  // onTriggerContainer = () => {
  //   if(this.state.isNav === false) {
  //     return {
  //       left: 0
  //     }
  //   } else {
  //     return {
  //       left: -100
  //     }
  //   }   
  // }

  onToggle = () => {
    this.setState({
      isNav: !this.state.isNav
    })
  }



  render() { 
    let {isNav} = this.state; 
    return (
        <div className={isNav ? "pt-trigger-container open-nav" : "pt-trigger-container"} >
          <div 
            className="pt-show-trigger" 
            style={{width: 50, height: 50, backgroundColor: 'tomato', zIndex: 100}}
            onClick={this.onToggle}
          />
          <div className="pt-trigger-content">
            <div className="pt-trigger-header" style={{padding: 5, fontSize: 18}}><img alt="logo" src="images/TCD.png" width="100%" />
              <p className="text-center">Trinh Cong Danh</p>
            </div><a className="pt-trigger pmd-ripple-effect" data-animation={51} data-goto={1}><span className="pt-block-trigger"><i className="fa fa-home"> </i>
                <p>Home</p></span></a><a className="pt-trigger pmd-ripple-effect" data-animation={6} data-goto={2}><span className="pt-block-trigger"><i className="fa fa-user" />
                <p>About me</p></span></a><a className="pt-trigger" data-animation={7} data-goto={3}><span className="pt-block-trigger"><i className="fa fa-book" />
                <p>Resume</p></span></a><a className="pt-trigger" data-animation={7} data-goto={4}><span className="pt-block-trigger"><i className="fa fa-suitcase" />
                <p>Portfolio</p></span></a><a className="pt-trigger" data-animation={7} data-goto={5}><span className="pt-block-trigger"><i className="fa fa-envelope" />
                <p>Contact</p></span></a>
          </div>
        </div> 
    );
  }
}


