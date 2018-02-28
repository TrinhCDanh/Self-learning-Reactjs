import React, { Component } from 'react';

export default class FontSetting extends Component {

  setFontSize = (size) => {
    this.props.changeSize(size);
  }

  render() {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
            <h3 className="panel-title">Font Size</h3>
            </div>
            <div className="panel-body">
            <button type="button" className="btn btn-large btn-success" onClick={() => this.setFontSize(-2)}>Down</button>
            <button type="button" className="btn btn-large btn-success" onClick={() => this.setFontSize(2)}>Up</button>
            </div>
        </div>
    );
  }
}
