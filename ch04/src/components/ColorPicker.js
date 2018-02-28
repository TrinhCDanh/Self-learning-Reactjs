import React, { Component } from 'react';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', 'gold']
    };
  }

  showColor(color) {
    return {
      backgroundColor: color
    }
  }

  setColor = (color) => {
    this.props.changeColor(color);
  }

  render() {
    let {colors} = this.state;
    let {color} = this.props;
    let elemColor = colors.map((value, key) => {
      return  <span 
                  key={key} 
                  style={this.showColor(value)}
                  className = {color === value ? 'active' : ''}
                  onClick = {() => this.setColor(value)}
              ></span>
    });
    return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h3 className="panel-title">Color Picker</h3>
              </div>
              <div className="panel-body">
                {elemColor}
              </div>
            </div>
          </div>   
    );
  }
}
