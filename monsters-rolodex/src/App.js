import "./App.css";
import { Component } from "react";
import CardList from "./Components/Card-list/card-list-component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // The link is a promise which is asynchronous. Essentially a promise is a promise that we're going to return a value.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      )
    );
  }

  // This was created to optimize performance
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    // This sets monster as the value, and is it going to recieve a callback
    // and going to pass and call the callback on each element in the array
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // These were created for optimization - we removed this and state from the two variables
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((el) =>
      el.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          className="search"
          type="search"
          placeholder="Search Monsters"
          // This is an anonymous function
          onChange={onSearchChange}
        />

        {/* We don't need this as since we created the Card List Component.  */}

        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> {monster.name}</h1>
            </div>
          );
        })} */}

        {/* This component shouldn't have to think about 
        filtering its monster list. It only cares about what it's 
        going to display. So we use the "monster" prop so it can 
        render it to the UI*/}

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
