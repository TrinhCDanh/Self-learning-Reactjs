import React, { Component } from 'react';
import Course from './components/Course';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const ArrCourse = [
      {
        name: "React",
        free: true,
        desc: "React is very simple"
      },
      {
        name: "Nodejs",
        free: true
      },
      {
        name: "Laravel",
        free: false
      }
    ];

    let ItemCourse = ArrCourse.map((elem, index) => 
      <Course key={index} name={elem.name} free={elem.free}>{elem.desc}</Course>
    );

    return (
      <div className="row equal">
        {ItemCourse}
      </div>
    );
  }
}

export default App;
