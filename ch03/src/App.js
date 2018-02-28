import React, { Component } from 'react';
import Test from './components/Test';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        name: 'Danh',
        user: [
          {
            name: 'Trinh',
            age: 20
          },
          {
            name: 'Cong',
            age: 21
          },{
            name: 'Danh',
            age: 22
          }
        ]
      };
  }
  render() {
    var {user} = this.state;
    var elems = user.map((value, key) => {
      return <Test user={value} key={key} />
    });
    return (
      <div className="AppX">
        { elems }
      </div>
    );
  }
}

export default App;
