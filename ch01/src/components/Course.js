import React, { Component } from 'react';
import Lesson from './Lesson'

class Course extends Component {
	checkFree() {
		let free = this.props.free;
		if (free)
			return <a className="btn btn-primary" href="#" role="button">View</a>
	}
  render() {
    return (
    	<div className="col-md-4">
	      <div className="col-md-12 border">
	          <h1>{this.props.name}</h1>
	          <p>{this.props.children}</p>
	          <ul className="list-group">
	            <Lesson />
	            <Lesson />
	            <Lesson />
	          </ul>
	          {this.checkFree()}
	      </div>
      </div>

    );
  }
}

export default Course;
