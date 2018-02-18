import React, { Component } from 'react';

export default class StudyFrm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: 'fdgdfg'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      fullName: event.target.value
    });
  }

  handleSubmit(event) {
    alert(this.state.fullName);
    event.preventDefault(); // ko cho load lai trang
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="usr">Name:</label>
            <input value={this.state.fullName} onChange={this.handleChange} type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="sel1">Khoa hoc:</label>
            <select className="form-control" id="sel1">
              <option>Angular</option>
              <option>React</option>
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
              <label><input type="radio" name="optradio" />Option 1</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="optradio" />Option 2</label>
            </div>
            <div className="radio disabled">
              <label><input type="radio" name="optradio" />Option 3</label>
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

