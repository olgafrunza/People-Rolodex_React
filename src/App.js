import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import data from "./helper/data";

function App() {
  const people = data.results;
  const [filteredPeople, setFilteredPeople] = useState(people);

  const onSearch = (e) => {
    const searcFieldString = e.target.value.toLowerCase();

    const newFilteredPeople = people.filter((person) => {
      return (
        person.name.title.toLowerCase().includes(searcFieldString) ||
        person.name.first.toLowerCase().includes(searcFieldString) ||
        person.name.last.toLowerCase().includes(searcFieldString)
      );
    });
    setFilteredPeople(newFilteredPeople);
  };

  return (
    <div className="App">
      <h1 className="app-title">People Roledex</h1>
      <SearchBox
        placeholder="Search a Person"
        className="search-box"
        onChangeHandler={onSearch}
      />
      <CardList cards={filteredPeople} />
    </div>
  );
}

export default App;
