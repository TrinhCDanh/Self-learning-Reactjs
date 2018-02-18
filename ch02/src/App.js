import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import Items from './mocks/tasks';
import {filter, includes, orderBy as funcOrderBy} from 'lodash';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Items     : Items,
      isShowForm: false,
      strSearch : '',
      orderBy   : 'name',
      orderDir   : 'asc'
    };

    this.handleShowForm = this.handleShowForm.bind(this);
    this.handleSearch   = this.handleSearch.bind(this);
    this.handleSort   = this.handleSort.bind(this);
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

  handleSort(orderBy, orderDir) {
    this.setState({
      orderBy : orderBy,
      orderDir: orderDir
    });
  }

  render() {

    let {orderBy, orderDir, isShowForm, strSearch} = this.state;
    let ItemsOrigin = [...this.state.Items];
    let Items       = [];
    // Search
    Items = filter(ItemsOrigin, (index) => {
      return includes(index.name.toLowerCase(), strSearch);
    });
    // Sort
    Items = funcOrderBy(Items, [orderBy], [orderDir]);

    if(isShowForm)
      var elemForm = <Form handleCancel={this.handleShowForm} />;

    return (
      <div className="container">
        <Title />

        <Control
          orderBy         = {orderBy}
          orderDir        = {orderDir}
          handleClickForm = {this.handleShowForm}
          handleSort      = {this.handleSort}
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
