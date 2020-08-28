import React, { Fragment, useState, useEffect } from 'react';
import 'antd/dist/antd.css'

import './App.css';
import Login from './scenes/Login/Login';

//Pagination, Steps, DatePicker, Form, Select, Upload, Table, Modal

//hook
function App() {
  
  const [person, setPerson] = useState() 

  useEffect(() => {
    console.log("Se modifico person")
  }, [person])

  const myPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("hola")
        setPerson("Julanito")
        resolve({ success: 'OK' })
      }, 3000)
    })
  }

  const handler = async () => {
    myPromise()
    console.log("Paso")
  }
  
  handler()
  
  return (
    <div className="App">
      <Login/>
      {person}
    </div>
  );
}

export default App