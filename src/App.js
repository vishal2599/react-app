import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Developer", age: 25 },
      { name: "DevOps", age: 27 },
      { name: "Designer", age: 29 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // NEVER DO THIS:  this.state.persons[0].name = 'Project Manager';
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Sumit", age: 27 },
        { name: "Rattan", age: 35 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Vish!", age: 25 },
        { name: event.target.value, age: 27 },
        { name: "Rattan", age: 35 },
      ],
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: "#fff",
      font: "inherit",
      border: "2px solid dodgerblue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if( this.state.showPersons ){
      persons = (
        <div>
        {this.state.persons.map(person => {
          return <Person 
          name={person.name} 
          age={person.age} />
        })};
          </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am a React Developer.</h1>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
