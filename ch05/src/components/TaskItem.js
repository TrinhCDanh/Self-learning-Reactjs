import React, { Component } from 'react';

export default class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id);
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
                    <button type="button" className="btn btn-warning">
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
