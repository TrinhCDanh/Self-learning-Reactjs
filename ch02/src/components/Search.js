import React, { Component } from 'react';

export default class Search extends Component {
   constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handeSearch  = this.handeSearch.bind(this);
    this.handeClear   = this.handeClear.bind(this);

    this.state = {
      strSearch: ''
    }
  };
  handleChange(event) {
    this.setState({
      strSearch: event.target.value
    });
  }
  handeSearch() {
    this.props.clickGo(this.state.strSearch);
  }
  handeClear() {
    this.setState({
      strSearch: ''
    });
    this.props.clickGo('');
  }
  render() {
    return (
      <div className="col-xl-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input value={this.state.strSearch} onChange={this.handleChange} type="text" className="form-control" ref="search" placeholder="Search for..." />
          <span className="input-group-btn">
            <button onClick={this.handeSearch} className="btn btn-info" type="button">Go!!!</button>
            <button onClick={this.handeClear} className="btn btn-warning" type="button">Clear</button>
          </span>
        </div>
      </div>
    );
  }
}

