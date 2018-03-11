import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {filter, includes, orderBy as funcOrderBy} from 'lodash';
import { connect } from 'react-redux'; 
import * as actions from './../actions/index';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter);
        this.setState({
            [name]: value
        });
    }
    render() {
        let {tasks, filterTable, searchResult, isSort} = this.props;

        // filter action
        if(filterTable) {
          tasks = filter(tasks, (index) => {
            return includes(index.name.toLowerCase(), filterTable.name);
          });
          tasks = filter(tasks, (index) => {
            if (filterTable.status === -1)
              return index;
            else
              return index.status === (filterTable.status === 1 ? true : false);
          });
        }

        // search action
        if(searchResult !== '') {
          tasks = filter(tasks, (index) => {
            return includes(index.name.toLowerCase(), searchResult);
          });
        }

        // sort action
        tasks = funcOrderBy(tasks, [isSort.sortBy], [isSort.sortDir]);

        let elemsTask = tasks.map((task, index) => {
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task}
                        onUpdate={this.props.onUpdate}  
                    />
        });

        return (
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td />
                    <td>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="filterName" 
                        onChange={this.onChange}
                    />
                    </td>
                    <td>
                    <select className="form-control" name="filterStatus" onChange={this.onChange}>
                        <option value={-1}>Tất Cả</option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>Kích Hoạt</option>
                    </select>
                    </td>
                    <td />
                </tr>
                { elemsTask }
                </tbody>
            </table>
        );
    }
}

var mapStatetoProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        searchResult: state.search,
        isSort: state.sort
    }
}

var mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable : (filter) => {
            dispatch(actions.FilterTable(filter));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(TaskList);