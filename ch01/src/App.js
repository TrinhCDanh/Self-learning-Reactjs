import React, { Component } from 'react';
import Course from './components/Course';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row equal">
        <Course name="React" free={true}>React is very simple</Course>
        <Course name="Nodejs" free={true}/>
        <Course name="Laravel" free={false}/>
      </div>
    );
  }
}

export default App;
