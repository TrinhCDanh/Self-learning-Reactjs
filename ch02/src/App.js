import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import Items from './mocks/tasks';
import {filter, includes, orderBy as funcOrderBy, remove, reject} from 'lodash';
//import logo from './logo.svg';
//import './App.css';
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Items       : [],
      isShowForm  : false,
      strSearch   : '',
      orderBy     : 'name',
      orderDir    : 'asc',
      isSelectItem: null
    };

    this.handleShowForm = this.handleShowForm.bind(this);
    this.handleSearch   = this.handleSearch.bind(this);
    this.handleSort     = this.handleSort.bind(this);
    this.handleDelete   = this.handleDelete.bind(this);
    this.handleSubmit   = this.handleSubmit.bind(this);
    this.handleEdit     = this.handleEdit.bind(this);
  }

  componentWillMount() {
    let items = JSON.parse(localStorage.getItem("task"));
    this.setState({
      Items: items
    });
  }

  handleShowForm() {
    this.setState({
      isShowForm  : !this.state.isShowForm,
      isSelectItem: null
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

  handleDelete(id) {
    console.log(id);
    let items = this.state.Items;
    remove(items, (item) => {
      return item.id === id;
    });
    this.setState({
      Items: items
    });

    localStorage.setItem("task", JSON.stringify(items));
  }

  handleSubmit(item) {
    let {Items} = this.state;
    let id      = null;

    if(item.id !== '') {
      Items = reject(Items, {id: item.id});
      id    = item.id;
    } else {
      id = uuidv4();
    }

    Items.push({
      id   : id,
      name : item.name,
      level: +item.level
    });

    this.setState({
      Items     : Items,
      isShowForm: false
    });

    localStorage.setItem("task", JSON.stringify(Items));
  }

  handleEdit(item) {
    this.setState({
      isSelectItem: item,
      isShowForm  : true
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
      var elemForm =  <Form
                        handleCancel={this.handleShowForm}
                        handleSubmit={this.handleSubmit}
                        isSelectItem={this.state.isSelectItem}
                      />;

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

        <List
          Items        = {Items}
          handleDelete = {this.handleDelete}
          handleEdit   = {this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
