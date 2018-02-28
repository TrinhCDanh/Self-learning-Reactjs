import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Page01 from './components/Page01';
import Page02 from './components/Page02';
import Page03 from './components/Page03';
import Page04 from './components/Page04';
import Page05 from './components/Page05';

class App extends Component {
  render() {
    return (
      <div className="pt-wrapper">
        <Nav />
        {/* All Pages          */}
        <Page01 />
        <Page02 />
        <Page03 />
        <Page04 />
        <Page05 />
      </div>
    );
  }
}

export default App;
