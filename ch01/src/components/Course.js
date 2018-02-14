import React, { Component } from 'react';
import Lesson from './Lesson'

class Course extends Component {
  render() {
    return (
    	<div className="col-md-4">
	      <div className="col-md-12 border">
	          <h1>Course</h1>
	          <ul className="list-group">
	            <Lesson />
	            <Lesson />
	            <Lesson />
	          </ul>
	      </div>
      </div>

    );
  }
}

export default Course;
