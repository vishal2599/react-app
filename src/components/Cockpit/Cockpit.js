import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if( props.showPersons ){
      btnClass = classes.Red;
    }

    if( props.persons.length < 2 ){
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if( props.persons <= 1 ){
      assignedClasses.push(classes.bold); // classes = ['bold', 'red']
    }
    return (
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={props.clicked} alt={props.altered}>
          Toggle Persons
        </button>
        </div>
    );
};

export default Cockpit;