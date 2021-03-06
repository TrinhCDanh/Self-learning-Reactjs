import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';


class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseFrm();
    }
    onEditTask = () => {
        this.props.onOpenFrm();
        this.props.onEditItem(this.props.task);
    }
    render() {
        let { index, task} = this.props;
        function status(task_status) {
            var status = {label: 'label label-danger', title: 'Ẩn'};
            if(task_status) {
                status = {label: 'label label-success', title: 'Kích Hoạt'}
            }
            return status;
        }
        let setStatus  = status(task.status);
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={setStatus.label} onClick={this.onUpdateStatus}>
                        {setStatus.title}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEditTask}>
                        <span className="fa fa-pencil mr-5" />Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete} >
                        <span className="fa fa-trash mr-5" />Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.UpdateStatus(id));
        },
        onDelete: (id) => {
            dispatch(actions.DeleteTask(id));
        },
        onCloseFrm: () => {
            dispatch(actions.CloseForm());
        },
        onOpenFrm: () => {
            dispatch(actions.OpenForm());
        },
        onEditItem: (task) => {
            dispatch(actions.EditItem(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem); 