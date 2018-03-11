import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component {

    onSort = (sortBy, sortDir) => {
        var sort = {
            sortBy: sortBy,
            sortDir: sortDir
        } 
        this.props.onSort(sort);
    }

    render() {
        let { isSort } = this.props;
        console.log(isSort);
        var sortBy = isSort.sortBy;
        var sortDir = isSort.sortDir;
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li onClick={() => this.onSort('name', 'asc')} >
                    <a role="button" className={(sortBy === 'name' && sortDir ==='asc') ? "sort_selected" : ""}>
                    <span className="fa fa-sort-alpha-asc pr-5">
                        Tên A-Z
                    </span>
                    </a>
                </li>
                <li onClick={() => this.onSort('name', 'desc')}>
                    <a role="button" className={(sortBy === 'name' && sortDir ==='desc') ? "sort_selected" : ""}>
                    <span className="fa fa-sort-alpha-desc pr-5">
                        Tên Z-A
                    </span>
                    </a>
                </li>
                <li role="separator" className="divider" />
                <li onClick={() => this.onSort('status', 'desc')}>
                    <a role="button" className={(sortBy === 'status' && sortDir ==='desc') ? "sort_selected" : ""}>Trạng Thái Kích Hoạt</a>
                </li>
                <li onClick={() => this.onSort('status', 'asc')}>
                    <a role="button" className={(sortBy === 'status' && sortDir ==='asc') ? "sort_selected" : ""}>Trạng Thái Ẩn</a>
                </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      isSort: state.sort
    }
  }
  
const mapDispatchToProps = (dispatch, props) => {
    return {
            onSort: (sort) => {
                dispatch(actions.SortTask(sort));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);