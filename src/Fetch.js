import React, { Fragment, useState, useEffect } from 'react';

import './App.css';

//hook
function App() {

  const [users, setUsers] = useState()

  useEffect(() => {
    getUsers('api')
      .then(data => setUsers(data.results))
  }, [])

  return (
    <div className="App">
      {/*Spinner, Loader, Loading*/}
      {!users && <h1>Cargando...</h1>}

      {users && users.map((item, index) => (
        <span key={index}>{item.gender}</span>
      ))}
      
      <div className="style-three">
      </div>
    </div>
  );
}


const getUsers = (endPoint, data) => {
  return fetch(`https://randomuser.me/${endPoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
}


export default App