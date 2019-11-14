import React, { Component } from "react";

import { TraderList } from "./components/trader-list/trader-list";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = { traders: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ traders: users }));
  }

  render() {
    return (
      <div className="App">
        <TraderList test="Test">
          {this.state.traders.map(trader => (
            <h1> {trader.name} </h1>
          ))}
        </TraderList>
      </div>
    );
  }
}

export default App;
