import React, { Component } from 'react';

export default class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    componentWillMount() {
        this.nextUpdateItem(this.props.taskedit);
    }
    componentWillReceiveProps(nextProps) {
        this.nextUpdateItem(nextProps.taskedit);
        if(!nextProps.taskedit) {
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }
    nextUpdateItem = (item) => {
        if(item !== null) {
            this.setState({
                id: item.id,
                name: item.name,
                status: item.status       
            });  
        }
    }
    
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        this.props.onSubmit(this.state);
        event.preventDefault();
        this.onClear();
        this.props.onCloseFrm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.taskedit ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
                        <span className="fa fa-times-circle text-right"
                            onClick={this.props.onCloseFrm}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" required="required" name="status"  value={this.state.status} onChange={this.onChange}>
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        <br />
                        <div className="text-center">
                        <button type="submit" className="btn btn-warning">Save</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.onClear}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

