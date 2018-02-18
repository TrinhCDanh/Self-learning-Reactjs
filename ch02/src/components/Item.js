import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  // Cách khác trong video 30 của ZendVN
  showLevel(level) {
    if (level === 0)
      return {badge: "badge badge-primary",diff: "Small"}
    else if (level === 1)
      return {badge: "badge badge-secondary", diff: "Medium"} ;
    else
      return {badge: "badge badge-danger", diff: "High"};
  }

  render() {
    const {taskname} = this.props;
    const {index} = this.props;
    const level = this.props.level;

    let result_level = this.showLevel(level);
   // console.log(result_level);

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{taskname}</td>
        <td className="text-center"><span className={result_level.badge}>{result_level.diff}</span></td>
        <td>
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>

    );
  }
}

