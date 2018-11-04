import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "../services/robots";
import SearchBox from "./Searchbox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {

    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="text-center">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox
          searchChange={this.onSearchChange}
          searchField={this.searchField}
        />
        <CardList robots={filteredRobots} cardClick={this.onCardClick}/>
      </div>
    );
  }
}

export default App;
