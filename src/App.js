import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonState] = useState({
    persons : [
      { role: 'Developer', age: 25 },
      { role: 'Q/A', age: 27 },
      { role: 'Designer', age: 29 }
    ]
  });

  const [otherState, setOtherState] = useState({otherState: 'some other value'});
  console.log(personsState, otherState);


  const switchRoleHandler = () => {
    // NEVER DO THIS:  this.state.persons[0].role = 'Project Manager';
    setPersonState({persons:[
        { role: 'Project Manager', age: 25 },
        { role: 'Q/A', age: 27 },
        { role: 'Designer', age: 35 }
      ]
    });
  };

    return (
      <div className="App">
        <h1>Hi, I am a React Developer.</h1>
        <button onClick={switchRoleHandler}>Switch Role</button>
        <Person role={personsState.persons[0].role} age={personsState.persons[0].age}/>
        <Person role={personsState.persons[1].role} age={personsState.persons[1].age}> My hobby is to go on long bike rides. </Person>
        <Person role={personsState.persons[2].role} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    };

export default app;

// state = {
  
// };

