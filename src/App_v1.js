import React, { Fragment, useState, useEffect } from 'react';

import './App.css';
import { CardPerson } from './CardPerson'

//hook
function App() {

  const [person, setPerson] = useState({ name: 'Fulanito', lastname: 'Simpson' })
  const [name, setName] = useState('Fulanito')
  //string, numbers, json

  const dummy = [
    { id: 1, name: "Daniel", lastname: "Perez" },
    { id: 2, name: "Marquitos", lastname: "Perez2" },
    { id: 3, name: "Fulanito", lastname: "Perez3" }
  ]

  useEffect(() => {
    //Petición a un servidor
    //Solicitar datos de redux
    console.log("Se inicializo el componente App.js")
  }, [])

  useEffect(() => {
    console.log("Se actualizo la variable name")
  }, [name, person])

  const myFunction = () => {
    setName('Cosmo')
  }

  const cardColor = (id) => {
    if(id === 1)
      return 'red'
    else if(id === 2)
      return 'green'
    return 'yellow'
  }

  return (
    <div className="App">
      
      {name === 'Cosmo' &&
        <div className="banner-title">Texto escondido</div>
      }
      <button onClick={myFunction}>Cambiar nombre</button>
      <div className="style-two"></div>
      <div className="style-three">
        {/*dummy.map(item => (
          <div key={item.id} style={{ backgroundColor: cardColor(item.id) }} className={cardColor(item.id)}>
            <p>{item.id} {item.name}</p>
          </div>
        ))*/}
        { dummy.map(person => (
          <CardPerson name={person.name} name={person.lastname} age={person.age}/>
        ))}
      </div>
    </div>
  );
}

// /*lowerCamelCase = variable, funciones
// PascalCase = NombreDeClases
// snake_case = Base de datos
// kebab-case = nombre-folder-contenores
// UPPER_CASE = constantes*/

export default App;
