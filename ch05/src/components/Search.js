import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch: ''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        this.props.onSearch(this.state.strSearch);
        event.preventDefault();
    }
    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmit} >
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nhập từ khóa..." 
                    name="strSearch"
                    onChange={this.onChange} 
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">
                        <span className="fa fa-search mr-5" />Tìm
                    </button>
                </span>
            </form>
        );
    }
}
