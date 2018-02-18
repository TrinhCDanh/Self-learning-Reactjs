import React, { Component } from 'react';
import Item from './Item'

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    //console.log(this.props.Items);
    const Elem = this.props.Items.map((item, index) => {
      return (
        <Item
          key      = {index}
          taskname = {item.name}
          index    = {index}
          level    = {item.level}
          id       = {item.id}
          handleDelete={this.props.handleDelete}
        />
      );
    });

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
            {Elem}
          </tbody>
        </table>
      </div>
    );
  }
}

