import React, { Component } from 'react';

export default class StudyFrm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      course: 'angular',
      optradio: 'opt1'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault(); // ko cho load lai trang
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="usr">Name:</label>
            <input value={this.state.fullName} onChange={this.handleChange} name="fullName" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="sel1">Khoa hoc:</label>
            <select value={this.state.course} onChange={this.handleChange} name="course" className="form-control" id="sel1">
              <option value="angular">Angular</option>
              <option value="react">React</option>
              <option value="nodejs">Nodejs</option>
            </select>
          </div>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultValue />Option 1
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultValue />Option 2
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultValue />Option 3
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="radio">
              <label><input onChange={this.handleChange} checked={this.state.optradio === 'opt1'} value='opt1' type="radio" name="optradio" />Option 1</label>
            </div>
            <div className="radio">
              <label><input onChange={this.handleChange} checked={this.state.optradio === 'opt2'} value='opt2' type="radio" name="optradio" />Option 2</label>
            </div>
            <div className="radio disabled">
              <label><input onChange={this.handleChange} checked={this.state.optradio === 'opt3'} value='opt3' type="radio" name="optradio" />Option 3</label>
            </div>
          </div>
          <div className="form-group row">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

