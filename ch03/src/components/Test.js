import React, { Component } from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      name: 'fff'
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    // let itemadd = {
    //   id: this.state.task_id,
    //   name: this.state.task_name,
    //   level: this.state.task_level
    // }
    // this.props.handleSubmit(itemadd);
    alert(this.state.name);
    event.preventDefault(); // ko cho load lai trang
  }

  render() {
    let {user} = this.props;
    return (  
      <div className="userinfo">
        <h1>Name: {user.name}</h1>
        <p>Age: {user.age}</p>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleChange} name="name" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
