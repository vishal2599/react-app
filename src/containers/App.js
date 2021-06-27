import React, { Component } from "react";
import classes from "./App.css";

// import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id:'person1', name: "Developer", age: 25 },
      { id:'person2', name: "DevOps", age: 27 },
      { id:'person3', name: "Designer", age: 29 },
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = this.state.persons;
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    let persons = null;

    if( this.state.showPersons ){
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        />
      }

    return (
      <div className={classes.App}>
        <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons} 
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        altered={this.showPersons}
        />
        {persons}
      </div>
    );
    // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
