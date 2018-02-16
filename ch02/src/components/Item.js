import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      
      <tr>
        <td className="text-center">1</td>
        <td>ljalfj dlfj dalfjad flkjadsl fj aldfj ladsjflksadjf</td>
        <td className="text-center"><span className="badge badge-primary">Medium</span></td>
        <td>
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
            
    );
  }
}

