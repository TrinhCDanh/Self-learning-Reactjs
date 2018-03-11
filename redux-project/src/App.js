import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
//import {filter, includes, orderBy as funcOrderBy, remove, findIndex} from 'lodash';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'name',
      sortDir: 'asc'
    };
  }

  onToggleFrm = () => {
    var { isEditingFrm } = this.props;
    if ( isEditingFrm && isEditingFrm.id !== '') {
      this.props.onOpenFrm();
    } else {
      this.props.onToggleFrm();
    }
    this.props.onClearTask({
      id: '', name: '', status: false
    });
  }

  onSort = (sortBy, sortDir) => {
    this.setState({
      sortBy: sortBy,
      sortDir: sortDir
    });
  }

  render() {
    let {strSearch, sortBy, sortDir} = this.state;
    var { isDisplayFrm } = this.props;

    // tasks = funcOrderBy(tasks, [sortBy], [sortDir]);

    let showFrm = isDisplayFrm ?  <TaskForm /> : '' ;

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
            <Control onSort={this.onSort} sortBy={sortBy} sortDir={sortDir} />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList />
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
    isDisplayFrm: state.isDisplayFrm,
    isEditingFrm: state.loadTask
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleFrm: () => {
      dispatch(actions.ToggleForm());
    },
    onClearTask: (task) => {
      dispatch(actions.EditItem(task));
    },
    onOpenFrm: () => {
      dispatch(actions.OpenForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
