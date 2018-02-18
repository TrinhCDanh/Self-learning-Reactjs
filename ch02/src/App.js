import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import Items from './mocks/tasks';
import {filter, includes} from 'lodash';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Items: Items,
      isShowForm: false,
      strSearch: ''
    };

    this.handleShowForm = this.handleShowForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleShowForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }

  handleSearch(value) {
    this.setState({
      strSearch: value
    });
  }

  render() {
    //console.log(this.state.strSearch);
    let ItemsOrigin = [...this.state.Items];
    let isShowForm  = this.state.isShowForm;
    let keySearch   = this.state.strSearch;
    let Items       = [];

    Items = filter(ItemsOrigin, (index) => {
      return includes(index.name.toLowerCase(), keySearch);
    });



    if(isShowForm)
      var elemForm = <Form handleCancel={this.handleShowForm} />;

    return (
      <div className="container">
        <Title />

        <Control
          handleClickForm = {this.handleShowForm}
          isCloseForm     = {isShowForm}
          clickGo         = {this.handleSearch}
        />

        {elemForm}

        <List Items={Items}/>
      </div>
    );
  }
}

export default App;
