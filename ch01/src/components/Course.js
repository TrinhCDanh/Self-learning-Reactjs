import React, { Component } from 'react';
import Lesson from './Lesson'

class Course extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isShowOutline: false,
			totalStudent: 69
		};

		this.handleClick3 = this.handleClick3.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
		this.handleShow = this.handleShow.bind(this);
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

	handleRegister() {
		alert(this.refs.username.value);
	}

	handleShow() {
		this.setState({
			isShowOutline: !this.state.isShowOutline
		});
	}

	checkFree() {
		let free = this.props.free;
		if (free)
			return 	<div className="btn-group"> 
								<a onClick={this.handleClick1} className="btn btn-primary" href="#" role="button">View 1</a>
								<a onClick={() => this.handleClick2("Hello World!")} className="btn btn-danger" href="#" role="button">View 2</a>
								<a onClick={this.handleClick3} className="btn btn-warning" href="#" role="button">View 3</a>
							</div>
		else 
			return (
				<div className="input-group mb-3">
				  <input type="text" className="form-control" placeholder="Recipient's username" ref="username"/>
				  <div className="input-group-append">
				    <button onClick={this.handleRegister} className="btn btn-outline-secondary" type="button">Button</button>
				  </div>
				</div>
			)
	}
  render() {
  	let elemOutline = null;
  	if (this.state.isShowOutline) {
  		elemOutline = <ul className="list-group">
					            <Lesson />
					            <Lesson />
					            <Lesson />
					          </ul>;
  	}
    return (
    	<div className="col-md-4">
	      <div className="col-md-12 border">
	          <h1>{this.props.name}</h1>
	          <p>{this.props.children}</p>
	          <p><button onClick={this.handleShow} className="btn btn-success" type="button">Toggle Outline</button></p>
	          {elemOutline}
	          {this.checkFree()}
	      </div>
      </div>

    );
  }
}

export default Course;
