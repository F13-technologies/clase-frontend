import React from 'react';

//UpperCamelCase
export const CardPerson = ({ handlerSetPersonName, ...person }) => {

  return (
    <div>
      <p>Nombre: {person.name}</p>
      <p>Apellido: {person.lastname}</p>
      <p>Edad: {person.age}</p>
      {/*callback*/}
      <button onClick={() => handlerSetPersonName('Cosmo', 0)}>Cambiar nombre</button>
    </div>
  )
}