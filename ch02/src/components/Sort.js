import React, { Component } from 'react';

export default class Sort extends Component {
  constructor(props) {
    super(props);

    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(orderBy, orderDir) {
    console.log(`${orderBy} - ${orderDir}`);
    this.props.handleSort(orderBy, orderDir);
  }

  render() {
    let {orderBy, orderDir} = this.props;
    let sortType = `${orderBy} - ${orderDir}`;

    return (
      <div className="col-xl-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown open">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a onClick={() => this.handleSort('name', 'asc')} className="dropdown-item">Name ASC</a>
            <a onClick={() => this.handleSort('name', 'desc')} className="dropdown-item">Name DESC</a>
            <a onClick={() => this.handleSort('level', 'asc')} className="dropdown-item">Level ASC</a>
            <a onClick={() => this.handleSort('level', 'desc')} className="dropdown-item">Level DESC</a>
          </div>
          <span className="badge badge-success" style={{fontSize: 20, padding: 5}}>{sortType}</span>
        </div>
      </div>
    );
  }
}

