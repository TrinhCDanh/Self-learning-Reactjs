import React, { Component } from 'react';
import FontSetting from './components/FontSetting';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    }
  }

  changeColor = (params) => {
    this.setState({
      color: params
    });
  }

  changeSize = (size) => {
    this.setState({
      fontSize: (this.state.fontSize + size >= 8 && this.state.fontSize + size <= 36) ? this.state.fontSize + size : this.state.fontSize
    });
  }

  changeDefault = (value) => {
    if(value) {
      this.setState({
        color: 'red',
        fontSize: 15
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <ColorPicker color={this.state.color} changeColor={this.changeColor} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <FontSetting changeSize={this.changeSize} />
            <Reset changeDefault={this.changeDefault} />
          </div>
          <Result color={this.state.color}  fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
