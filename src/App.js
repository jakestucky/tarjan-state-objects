import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    name: 'Jake',
  };

  render() {
    return (
      <div>
        <h1>{this.state.cohortName}Learns State ith Object</h1>
        <div>
          {this.state.salutation} my name is {this.state.name}
        </div>
      </div>
    );
  }
}

export default App;
