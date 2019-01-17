import React, { Component } from 'react';
//import logo from './logo.svg';
import Top from './componets/barratopo';
//import Center from './componets/teste';
import Center from './principal'
import './App.css';
//import T from './componets/teste3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top/>
        <Center/>
      </div>
    );
  }
}

export default App;
