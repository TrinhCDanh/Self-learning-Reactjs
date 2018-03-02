import React, { Component } from 'react';

export default class Page02 extends Component {
  render() {
    return (
        <div className="pt-page pt-page-2 next-page scroll-custom">
          <div className="section-inner">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="project">
                  <div className="project__card"><a className="project__image"><img alt="avatar" src="https://pbs.twimg.com/profile_images/599943744281026561/tatMfE2Y.jpg" /></a>
                    <div className="project__detail">
                      <h2 className="project__title"><a>Hello Guys!</a></h2><small className="project__category"><a>I am Danh</a></small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <p>I am Batman</p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" />
            </div>
          </div>
        </div>
    );
  }
}
