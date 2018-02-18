import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

export default class Control extends Component {
  render() {
    //console.log(this.props.isCloseForm);
    let elemClose = {btn: "btn btn-info btn-block", content: "Add Task"};
    if (this.props.isCloseForm)
      elemClose = {btn: "btn btn-block btn-success", content: "Close Task"};
    return (
      <div className="row">
        <Search clickGo={this.props.clickGo} />

        <Sort/>

        <div className="col-xl-5 col-sm-5 col-md-5 col-lg-5">
          <button onClick={this.props.handleClickForm} type="button" className={elemClose.btn}>{elemClose.content}</button>
        </div>
      </div>
    );
  }
}

