import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    name: 'Jake',
    whereILive: 'Coon Rapids',
    pizzaTopping: 'Italian Sausage',
  };

  render() {
    return (
      <div>
        <h1>{this.state.cohortName}Learns State ith Object</h1>
        <div>
          {this.state.salutation} my name is {this.state.name}
          <ul>
            <li>my name is {this.state.name} </li>
            <li>I live in {this.state.whereILive}</li>
            <li>My favorite pizza topping is {this.state.pizzaTopping}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
