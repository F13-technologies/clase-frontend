import React, { Fragment, useState, useEffect } from 'react';

import './App.css';
import { CardPerson } from './CardPerson'

//hook
function App() {

  const [persons, setPersons] = useState([
    { id: 1, name: "Daniel", lastname: "Perez" },
    { id: 2, name: "Marquitos", lastname: "Perez2" },
    { id: 3, name: "Fulanito", lastname: "Perez3" }
  ])

  useEffect(() => {
    const newPersons = persons.map(person => {
      //spreed operator
      return { ...person, age: person.id }
    })
    setPersons(newPersons)
  }, [])

  const handlerSetPersonName = (name, index) => {
    console.log(name)
  }
  
  return (
    <div className="App">
      <div className="style-three">
        {/*<CardPerson name={person.name} lastname={person.lastname} age={person.age} />*/}
        {persons.map((person, i) => (
          <CardPerson key={i} {...person} handlerSetPersonName={handlerSetPersonName}/>
        ))}
      </div>
    </div>
  );
}

export default App