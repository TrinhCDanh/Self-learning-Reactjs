import React, { Component } from 'react';

export default class Form extends Component {
   constructor(props) {
    super(props);

    this.state = {
      task_name: '',
      task_level: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let itemadd = {
      name: this.state.task_name,
      level: this.state.task_level
    }
    this.props.handleSubmit(itemadd);
    event.preventDefault(); // ko cho load lai trang
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit} className="form-inline" style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div className="form-group">
              <label htmlFor="true" className="sr-only">label</label>
              <input value={this.state.task_name} onChange={this.handleChange} name="task_name" type="text" className="form-control" placeholder="Task Name"/>
            </div>
            <div className="form-group">
              <select value={this.state.task_level} onChange={this.handleChange} name="task_level" className="form-control" required>
                <option value={0}>Small</option>
                <option value={1}>Medium</option>
                <option value={2}>Hight</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button onClick={this.props.handleCancel} type="button" className="btn btn-default">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

