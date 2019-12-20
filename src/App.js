import React, { Component } from "react";

import { TraderList } from "./components/trader-list/trader-list";
import { SearchBox } from "./components/search-box/search-box";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = { traders: [], nameSearch: "", emailSearch: "", counter: 0, increment: 2 };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=12")
      .then(response => response.json())
      .then(users => this.setState({ traders: users.results }));
  }

  render() {

    const { traders, nameSearch, emailSearch } = this.state;
    const filteredNames = traders.filter(trader =>
      (trader.name.first.toLowerCase() + " " + trader.name.last.toLowerCase()).includes(nameSearch.toLowerCase())
    );
    const filteredEmails = filteredNames.filter(trader =>
      trader.email.toLowerCase().includes(emailSearch.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="App-title">User Search</h1>
        <SearchBox
          placeholder="search name"
          handleChange={event =>
            this.setState({ nameSearch: event.target.value })
          }
        />
        <SearchBox
          placeholder="search email"
          handleChange={event =>
            this.setState({ emailSearch: event.target.value })
          }
        />
        <TraderList traders={filteredEmails} />
      </div>
    );
  }
}

export default App;
