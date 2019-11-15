import React, { Component } from "react";

import { TraderList } from "./components/trader-list/trader-list";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = { traders: [], };
  }

  componentDidMount() {
      fetch("https://randomuser.me/api/?results=12")
        .then(response => response.json())
        .then(users => this.setState({ traders: users.results }));
  }

  render() {

    return (
      <div className="App">
        <TraderList traders={this.state.traders} />
      </div>
    );
  }
}

export default App;
