import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

export default class Control extends Component {
  render() {
    return (
      <div className="row">
        <Search />
        
        <Sort/>
        
        <div className="col-xl-5 col-sm-5 col-md-5 col-lg-5">
          <button onClick={this.props.handleClickForm} type="button" className="btn btn-info btn-block">Add Task</button>
        </div>
      </div>
    );
  }
}

