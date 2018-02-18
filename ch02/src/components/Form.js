import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form action="true" method="POST" className="form-inline" style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div className="form-group">
              <label htmlFor="true" className="sr-only">label</label>
              <input type="text" className="form-control" placeholder="Task Name" ref="Task_Name" />
            </div>
            <div className="form-group">
              <select name="ds" id="inputDs" className="form-control" required ref="task_level">
                <option value={0}>Small</option>
                <option value={1}>Medium</option>
                <option value={2}>Hight</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
            <button onClick={this.props.handleCancel} type="button" className="btn btn-default">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

