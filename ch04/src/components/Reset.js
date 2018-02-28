import React, { Component } from 'react';

export default class Reset extends Component {

  changeDefault = () => {
    this.props.changeDefault(true);
  }

  render() {
    return (
        <button type="button" className="btn btn-large btn-block btn-primary" onClick={this.changeDefault}>Reset</button>
    );
  }
}
