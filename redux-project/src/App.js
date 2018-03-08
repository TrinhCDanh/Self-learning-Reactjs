import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import {filter, includes, orderBy as funcOrderBy, remove, findIndex} from 'lodash';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: null,
      filters: {
        name: '',
        status: -1
      },
      strSearch: '',
      sortBy: 'name',
      sortDir: 'asc'
    };
  }

  onToggleFrm = () => {
    this.props.onToggleFrm();
  }

  // onUpdateStatus = (id) => {
  //   var {tasks} = this.state;
  //   var index = findIndex(tasks, {id: id});
  //   tasks[index].status = !tasks[index].status;
  //   this.setState({
  //     tasks: tasks
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks) );
  // }

  // onDelete = (id) => {
  //   let {tasks} = this.state;
  //   remove(tasks, (item) => {
  //     return item.id === id;
  //   });
  //   this.setState({
  //     tasks: tasks
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

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

  onSort = (sortBy, sortDir) => {
    this.setState({
      sortBy: sortBy,
      sortDir: sortDir
    });
  }

  render() {
    let {filters, strSearch, sortBy, sortDir} = this.state;
    var { isDisplayFrm } = this.props;

    // if(filters) {
    //   tasks = filter(tasks, (index) => {
    //     return includes(index.name.toLowerCase(), filters.name);
    //   });
    //   tasks = filter(tasks, (index) => {
    //     if (filters.status === -1)
    //       return index;
    //     else
    //       return index.status === (filters.status === 1 ? true : false);
    //   });
    // }
    // if(strSearch !== '') {
    //   tasks = filter(tasks, (index) => {
    //     return includes(index.name.toLowerCase(), strSearch);
    //   });
    // }

    // tasks = funcOrderBy(tasks, [sortBy], [sortDir]);

    let showFrm = isDisplayFrm ?  <TaskForm 
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
            <button type="button" className="btn btn-primary margin-bottom" onClick={this.onToggleFrm} >
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sortBy} sortDir={sortDir} />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList 
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

// state là của store
const mapStateToProps = (state) => {
  return {
    isDisplayFrm: state.isDisplayFrm
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleFrm: () => {
      dispatch(actions.ToggleForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
