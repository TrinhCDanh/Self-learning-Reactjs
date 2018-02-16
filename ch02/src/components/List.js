import React, { Component } from 'react';
import Item from './Item'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{width: '10%'}} className="text-center">#</th>
              <th>Task</th>
              <th style={{width: '20%'}} className="text-center">Level</th>
              <th style={{width: '20%'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <Item />
          </tbody>
        </table>
      </div>
    );
  }
}

