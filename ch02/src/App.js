import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import Items from './mocks/tasks';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Items: Items
    };
  }

  render() {
    let Items = this.state.Items;

    return (
      <div className="container">
        <Title />

        <Control />
        
        <Form />
        
        <List Items={Items}/>
      </div>
    );
  }
}

export default App;
