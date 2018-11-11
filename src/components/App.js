import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "../services/robots";
import SearchBox from "./Searchbox";
import "./App.css";
import Scroll from "../services/Scroll"


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
    console.log("Constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log("response");
        console.log(response.json);
        return response.json();
      })
      .then(users => {
        console.log("users");
        console.log(users);
        this.setState({ robots: users });
      });
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    console.log("Render");
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.robots.length < 1) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="text-center">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox
            searchChange={this.onSearchChange}
            searchField={this.searchField}
          />
          <Scroll>
          <CardList robots={filteredRobots} cardClick={this.onCardClick} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
