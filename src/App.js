import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from 'radium';
import Person from "./Person/Person";

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "2px solid dodgerblue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if( this.state.showPersons ){
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click = {() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        })} 
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
          backgroundColor: "salmon",
          color: "black"
        }
      }

    const classes = [];
    if( this.state.persons.length < 2 ){
      classes.push('red'); // classes = ['red']
    }
    if( this.state.persons <= 1 ){
      classes.push('bold'); // classes = ['bold', 'red']
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I am a React Developer.</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
