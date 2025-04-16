import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./component/cardlist/cardlist.component";
import { SearchBox } from "./component/search box/searchbox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filterMoster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Masqurade Monsters</h1>;
        <SearchBox
          placeholder="search Monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMoster}></CardList>
      </div>
    );
  }
}

export default App;
