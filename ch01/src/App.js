import React, { Component } from 'react';
import Course from './components/Course';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row">
        <Course />
        <Course />
        <Course />
      </div>
    );
  }
}

export default App;
