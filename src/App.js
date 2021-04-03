import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { role: 'Developer', age: 25 },
      { role: 'Q/A', age: 27 },
      { role: 'Designer', age: 29 }
    ],
    otherState: 'some other value'
  }

  switchRoleHandler = () => {
    // NEVER DO THIS:  this.state.persons[0].role = 'Project Manager';
    this.setState({persons:[
        { role: 'Project Manager', age: 25 },
        { role: 'Q/A', age: 27 },
        { role: 'Designer', age: 35 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React Developer.</h1>
        <button onClick={this.switchRoleHandler}>Switch Role</button>
        <Person role={this.state.persons[0].role} age={this.state.persons[0].age}/>
        <Person role={this.state.persons[1].role} age={this.state.persons[1].age}> My hobby is to go on long bike rides. </Person>
        <Person role={this.state.persons[2].role} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
