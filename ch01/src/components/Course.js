import React, { Component } from 'react';
import Lesson from './Lesson'

class Course extends Component {

	constructor(props) {
		super(props);

		this.handleClick3 = this.handleClick3.bind(this);
	}

	handleClick1() {
		alert(123);
	}

	handleClick2(text = "Xmen") {
		alert(text);
	}

	handleClick3() {
		alert(this.props.name);
	}

	checkFree() {
		let free = this.props.free;
		if (free)
			return 	<div className="btn-group"> 
								<a onClick={this.handleClick1} className="btn btn-primary" href="#" role="button">View 1</a>
								<a onClick={() => this.handleClick2("Hello World!")} className="btn btn-danger" href="#" role="button">View 2</a>
								<a onClick={this.handleClick3} className="btn btn-warning" href="#" role="button">View 3</a>
							</div>
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
