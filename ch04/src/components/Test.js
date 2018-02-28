import React, { Component } from 'react';

export default class Test extends Component {
  render() {
    let {user} = this.props;
    return (  
      <div className="userinfo">
        <h1>Name: {user.name}</h1>
        <p>Age: {user.age}</p>
      </div>
    );
  }
}
