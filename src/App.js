import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Developer', age: 25 },
      { name: 'DevOps', age: 27 },
      { name: 'Designer', age: 29 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // NEVER DO THIS:  this.state.persons[0].name = 'Project Manager';
    this.setState({persons:[
        { name: newName, age: 25 },
        { name: 'Sumit', age: 27 },
        { name: 'Rattan', age: 35 }
      ]
    });
  }

  nameChangedHandler = event =>{
    this.setState({persons:[
      { name: 'Vish!', age: 25 },
      { name: event.target.value, age: 27 },
      { name: 'Rattan', age: 35 }
    ]
  });
  };

  render() {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '2px solid dodgerblue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I am a React Developer.</h1>
        <button 
        onClick={() => this.switchNameHandler('Vishu')}
        style={style}>Switch name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Vishal Singh')}
        changed={this.nameChangedHandler}> My hobby is to go on long bike rides. </Person>
 
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
