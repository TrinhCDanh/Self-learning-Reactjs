import React, { Component } from 'react';

export default class Result extends Component {
    
    updateColor = () => {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize : this.props.fontSize
        }
    }
    render() {
        let {color} = this.props;
        let {fontSize} = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color: {color} - font size: {fontSize}</p>
                <div className="result" style={this.updateColor()}>
                    AAA BBB CCC
                </div>          
            </div>
        );
    }
}
