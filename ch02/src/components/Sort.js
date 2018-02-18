import React, { Component } from 'react';

export default class Sort extends Component {
  render() {
    return (
      <div className="col-xl-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown open">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a className="dropdown-item">Name ASC</a>
            <a className="dropdown-item">Name DESC</a>
            <a className="dropdown-item">Level ASC</a>
            <a className="dropdown-item">Level DESC</a>
          </div>
          <span className="badge badge-success" style={{fontSize: 20, padding: 5}}>Name DESC</span>
        </div>
      </div>
    );
  }
}

