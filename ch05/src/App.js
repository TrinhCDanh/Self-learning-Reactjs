import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import {filter, includes, orderBy as funcOrderBy, remove, reject, findIndex} from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayFrm: false,
      isEditing: null,
      filters: {
        name: '',
        status: -1
      },
      strSearch: ''
    };
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }

  s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  createId() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
    this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  onToggleFrm = () => {
    if(this.state.isEditing !== null) {
      this.setState({
        isDisplayFrm: true,
        isEditing: null
      });
    } else {
      this.setState({
        isDisplayFrm: !this.state.isDisplayFrm,
        isEditing: null
      });
    }
    
  }

  onSubmit = (data) => {
    // data = {id, name, status}
    var {tasks} = this.state;
    if(data.id !== '') {
      var index = findIndex(tasks, {id: data.id});
      tasks[index] = data;
    } else {
      data.id = this.createId();
      tasks.push(data);
    }
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks) );

  }

  onUpdateStatus = (id) => {
    var {tasks} = this.state;
    var index = findIndex(tasks, {id: id});
    tasks[index].status = !tasks[index].status;
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks) );
  }

  onDelete = (id) => {
    let {tasks} = this.state;
    remove(tasks, (item) => {
      return item.id === id;
    });
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdate = (id) => {
    var {tasks} = this.state;
    var index = findIndex(tasks, {id: id});
    var isEditing = tasks[index];
    this.setState({
      isEditing: isEditing,
      isDisplayFrm: true,
    });
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filters: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  }

  onSearch = (strKey) => {
    console.log(strKey);
    this.setState({
      strSearch: strKey.toLowerCase()
    });
    console.log(this.state.strSearch);
  }

  render() {
    let {tasks, isDisplayFrm, filters, strSearch} = this.state;
    
    if(filters) {
      tasks = filter(tasks, (index) => {
        return includes(index.name.toLowerCase(), filters.name);
      });
      tasks = filter(tasks, (index) => {
        if (filters.status === -1)
          return index;
        else
          return index.status === (filters.status === 1 ? true : false);
      });
    }
    if(strSearch !== '') {
      tasks = filter(tasks, (index) => {
        return includes(index.name.toLowerCase(), strSearch);
      });
    }
    

    let showFrm = isDisplayFrm ?  <TaskForm 
                                    onCloseFrm={this.onToggleFrm} 
                                    onSubmit={this.onSubmit}
                                    taskedit={this.state.isEditing}
                                  /> : '' ;

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayFrm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''} >
            { showFrm }
          </div>
          <div className={isDisplayFrm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleFrm} >
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <Control onSearch={this.onSearch} />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList 
                  tasks={tasks} 
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                  onFilter={this.onFilter} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
