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
      isDisplayFrm: false
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

  onGeneralAdd = () => {
    var tasks = [
      {
        id: this.createId(),
        name: 'React',
        status: true
      },
      {
        id: this.createId(),
        name: 'Nodejs',
        status: false
      },
      {
        id: this.createId(),
        name: 'MongoDB',
        status: true
      }
    ];

    this.setState({
      tasks: tasks
    });

    localStorage.setItem('tasks', JSON.stringify(tasks) );
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
    this.setState({
      isDisplayFrm: !this.state.isDisplayFrm
    });
  }

  onSubmit = (data) => {
    var {tasks} = this.state;
    data.id = this.createId();
    tasks.push(data);
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

  render() {
    let {tasks, isDisplayFrm} = this.state;
    let showFrm = isDisplayFrm ? <TaskForm onCloseFrm={this.onToggleFrm} onSubmit={this.onSubmit} /> : '' ;

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
            <button type="button" className="btn btn-danger" onClick={this.onGeneralAdd} >
              General Add
            </button>
            <Control />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList 
                  tasks={tasks} 
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete} 
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
